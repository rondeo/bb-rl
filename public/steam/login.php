<?php
require 'vendor/iignatov/lightopenid/openid.php';
$_STEAMAPIKEY = "F31AA2C862BCF19916CD04D81E57A9D6";
try {
    $openid = new LightOpenID('localhost'); // http://URL.TO.REDIRECT.TO.AFTER.LOGIN/
    if (!$openid->mode) {
        $openid->identity = 'https://steamcommunity.com/openid/?l=english';    // This is forcing english because it has a weird habit of selecting a random language otherwise
        header('Location: ' . $openid->authUrl() . '&redirect=' . $_GET['redirect']);
    } elseif ($openid->mode == 'cancel') {
        echo json_encode(array(
            'error' => 'canceled_authentication',
            'errorMessage' => 'User has canceled authentication'
        ));
    } else {
        if ($openid->validate()) {
            $id = $openid->identity;
            // identity is something like: http://steamcommunity.com/openid/id/76561197960435530
            // we only care about the unique account ID at the end of the URL.
            $ptn = "/^https:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/";
            preg_match($ptn, $id, $matches);
            //echo "User is logged in (steamID: $matches[1])\n";

            $url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$_STEAMAPIKEY&steamids=$matches[1]";
            $json_object= file_get_contents($url);
            $json_decoded = json_decode($json_object, true);

            $result = $json_decoded['response']['players'][0];
            
            header('Content-Type: application/json');
            if (isset($_GET['redirect'])) {
                header('Location:' . $_GET['redirect'] . '?steamuser=' . json_encode($result));
            }
            echo json_encode($result);
        }
    }
} catch(ErrorException $e) {
    echo $e->getMessage();
}