import "./App.css";
import Profile from "./profile/Profile";
import NavBar from "./NavBar/NavBar";

function App() {
  const handleName = (name) => alert(name);

  return (
    <div>
      <NavBar />
      <br />
      <div className="crds">
        <div class="les-cards">
          <Profile
            fullName={"salem memmi"}
            bio={"HELLO"}
            profession={"fullstack js"}
            handleName={handleName}
          >
            <img src="/img/image1.jpg" alt="userAvatar" />
          </Profile>
          <Profile
            fullName={"salem memmi"}
            bio={"HELLO"}
            profession={"fullstack js"}
            handleName={handleName}
          >
            <img src="/img/image1.jpg" alt="userAvatar" />
          </Profile>
          <Profile
            fullName={"salem memmi"}
            bio={"HELLO"}
            profession={"fullstack js"}
            handleName={handleName}
          >
            <img src="/img/image1.jpg" alt="userAvatar" />
          </Profile>
          <Profile
            fullName={"salem memmi"}
            bio={"HELLO"}
            profession={"fullstack js"}
            handleName={handleName}
          >
            <img src="/img/image1.jpg" alt="userAvatar" />
          </Profile>
          <Profile
            fullName={"salem memmi"}
            bio={"HELLO"}
            profession={"fullstack js"}
            handleName={handleName}
          >
            <img src="/img/image1.jpg" alt="userAvatar" />
          </Profile>
        </div>
      </div>
    </div>
  );
}

export default App;
