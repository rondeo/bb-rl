<?php

// ======= Benötigte Header setzen:

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json;charset=UTF-8');

// ======= Daten werden aus dem Body geholt:
$data = array();
parse_str(json_decode(file_get_contents('php://input')), $data);
print_r($data);
// ======= Konfiguration:

$mailTo = 'alice@battleground-bulls.de';
$mailFrom = '"Kontakt" <alice@battleground-bulls.de>';
$mailSubject = '';
$mailText = '';
$mailSent1 = $mailSent2 = false;

// ======= Text der Mail aus den Formularfeldern erstellen:
if (isset($data) && count($data) > 0) {
   // alle Formularfelder der Reihe nach durchgehen:
   foreach($data as $name => $value) {
      // Wenn der Feldwert aus mehreren Werten besteht:
      // (z.B. <select multiple>)
       print_r($value);
      if (is_array($value)) {
          // "Feldname:" und Zeilenumbruch dem Mailtext hinzufügen
          $mailText .= $name . ":\n";
          // alle Werte des Feldes abarbeiten
          print_r("Before second foreach");
          foreach ($value as $entry) {
              print_r("In second foreach");
             // Einrückungsleerzeichen, Wert und Zeilenumbruch
             // dem Mailtext hinzufügen
             $mailText .= "   " . $value . "\n";
          } // ENDE: foreach
      } // ENDE: if
      // Wenn der Feldwert ein einzelner Feldwert ist:
      else {
          print_r("Else");
          // "Feldname:", Wert und Zeilenumbruch dem Mailtext hinzufügen
          $mailText .= $name . ": " . $value . "\n";
      } // ENDE: else
   } // ENDE: foreach


    // ======= Korrekturen vor dem Mailversand
    // Wenn PHP "Magic Quotes" vor Apostrophzeichen einfügt:
    if (get_magic_quotes_gpc()) {
        print_r("Magic Quotes");
        // eventuell eingefügte Backslashes entfernen
        $mailText = stripslashes($mailText);
    }

    // ======= Mailversand
    // Mail versenden und Versanderfolg merken
    $mailSent1 = @mail($mailTo, $mailSubject, $mailText, "From: ".$mailFrom);
} // if

// ======= Bestätigungsversand
// Wenn Mail von Benutzer übergeben wurde, dann schicke eine Bestätigungsmail

if ($data && $data['mail'])
{
    $mailTo = $data['mail'];
    $mailSubject = 'Bestätigung der Kontaktaufnahme';
    $mailText  = "Vielen Dank für deine Nachricht. \n\n";
    $mailText .= "Hiermit bestätigen wir, dass deine Nachricht an uns versendet wurde! \n\n";
    $mailText .= "Liebe Grüße \n";
    $mailText .= "Deine Bulls";
    $mailSent2 = @mail($mailTo, $mailSubject, $mailText, "From: ".$mailFrom);
}

$responseJson = array();

// Wenn der Mailversand und die Bestätigungsmail erfolgreich waren:
if ($mailSent1 == TRUE && $mailSent2 === TRUE) {
    $responseJson = array(
        'code' => 'mail-sent-with-confirmation',
        'message' => 'Successful confirmation sent.',
        'status' => 'OK'
    );
}
// Wenn der Mailversand erfolgreich war:
else if ($mailSent1 == TRUE) {
    print_r("if mailSent1 == TRUE");
    $responseJson = array(
        'code' => 'mail-sent',
        'message' => 'Successful sent.',
        'status' => 'OK'
    );
}
// Wenn die Mail nicht versendet werden konnte:
else {
    $responseJson = array(
        'code' => 'mail-not-sent',
        'message' => 'E-Mail not sent.',
        'status' => 'ERROR'
    );
}

echo json_encode($responseJson);