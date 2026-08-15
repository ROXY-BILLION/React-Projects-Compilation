import ContactButton from "./components/ContactButton";
import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="cl">
      <ProfileImage />
      <ProfileInfo />
      <Skills />
      <ContactButton/>
    </div>
  )
}
export default App;