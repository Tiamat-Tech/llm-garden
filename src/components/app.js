/* eslint no-unused-vars: "off" */
import { StoryIndex } from "../interactive-fiction/index";
import { ChatIndex } from "../chat/index";
import { AdventureChooserIndex } from "../adventure-chooser/index";
import { hasKeySignal, RequestKeyPage } from "./requestkey";
import { Home } from "./home";
import Router from "preact-router";

const App = () => {
  if (!hasKeySignal.value) {
    return <RequestKeyPage />;
  }
  return (
    <Router>
      <Home path="/" />
      <StoryIndex path="/interactive-fiction" />
      <ChatIndex path="/chat" />
      <AdventureChooserIndex path="/adventure-chooser" />
    </Router>
  );
};

export default App;
