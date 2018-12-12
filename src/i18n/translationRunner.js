const path = require("path");
const manageTranslations = require("react-intl-translations-manager").default;
const {SUPPORTED_LANG} = require("../i18n/supportedLanguages");

manageTranslations({
    messagesDirectory: path.join(__dirname),
    translationsDirectory: path.join(__dirname, "locales/"),
    languages: SUPPORTED_LANG // any language you need
});