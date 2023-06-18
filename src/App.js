import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes= {111}
          messages= {222}
          shares= {333}
          name= "vladi"
          description= "Gatão."
          music= "öooooh yeaaah"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes= {555}
          messages= {666}
          shares= {777}
          name= "jão"
          description= "Gato bundão."
          music= "tomanucú beats"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        <Video
          likes= {888}
          messages= {999}
          shares= {111}
          name= "sia_officimiow"
          description= "Pincesa do pai."
          music= "ai pai... para"
          url="https://drive.google.com/file/d/131Yi4Xxqy1PIwz_dVmq6tuMjhttps://drive.google.com/file/d/131Yi4Xxqy1PIwz_dVmq6tuMjK7vgyo3O/previewK7vgyo3O/view?usp=sharing"
        />
      </div>
    </div>
  );
}

export default App;
