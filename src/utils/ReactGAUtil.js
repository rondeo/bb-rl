import ReactGA from "react-ga";

export default class ReactGAUtil {

    /**
     *  Send Event to Google Analytics
     *
     *  category            String.     Required.   A top level category for these events. E.g. 'User', 'Navigation', 'App Editing', etc.
     *  action              String.     Required.   A description of the behaviour. E.g. 'Clicked Delete', 'Added a component', 'Deleted account', etc.
     *  label               String.     Optional.   More precise labelling of the related action. E.g. alongside the 'Added a component' action, we could add the name of a component as the label. E.g. 'Survey', 'Heading', 'Button', etc.
     *  value               Int.        Optional.   A means of recording a numerical value against an event. E.g. a rating, a score, etc.
     *  nonInteraction      Boolean.    Optional.   If an event is not triggered by a user interaction, but instead by our code (e.g. on page load, it should be flagged as a nonInteraction event to avoid skewing bounce rate data.
     *  transport           String.     Optional.   This specifies the transport mechanism with which hits will be sent. Valid values include 'beacon', 'xhr', or 'image'.
     */
    static sendEvent(category, action, label = null, value = null, nonInteraction = null, transport = null) {
        let event = {
            category: category,
            action: action
        };

        if (label !== null) event.label = label;
        if (value !== null) event.value = value;
        if (nonInteraction !== null) event.nonInteraction = nonInteraction;
        if (transport !== null) event.transport = transport;

        ReactGA.event(event);
    }
}
