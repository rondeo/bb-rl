/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import React from "react";
import ReactGA from "react-ga";
import { isEqual } from "lodash";

export default function withTracker(ChildComponent, options = {}) {
  const trackPage = (location) => {
    setTimeout(function () {
      let page = location.pathname + location.search + location.hash;
      ReactGA.set({
        page: page,
        ...options
      });
      ReactGA.pageview(page);
    }, 2000);
  };

  return class extends React.PureComponent {
    componentDidMount() {
      trackPage(this.props.location);
    }

    componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props.location, nextProps.location)) {
        trackPage(nextProps.location);
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  };
}
