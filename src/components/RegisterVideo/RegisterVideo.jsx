import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { useForm } from "../../hooks/useForm";

import { createClient } from "@supabase/supabase-js";

export default function RegisterVideo() {
  const [formVisibel, setFormVisible] = useState(false);
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" },
  });

  const PROJECT_URL = "https://czoifrofmqqrglfhyuyi.supabase.co";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6b2lmcm9mbXFxcmdsZmh5dXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNDY5NTksImV4cCI6MTk4NDcyMjk1OX0.pIooiRm9t_w2iYlQLO6HaaRE5q9ttuJ0B_Xq4JRLTto";

  const supabase = createClient(PROJECT_URL, API_KEY);

// get youtube tumbnail by url
  const getThumbnail = (url) => {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };




  function handleSubmitForm(e) {
    e.preventDefault();

    supabase
      .from("video")
      .insert({
        title: formCadastro.values.titulo,
        url: formCadastro.values.url,
        thumb: getThumbnail(formCadastro.values.url),
        playlist: "Tech",
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    formCadastro.clearForm();
    setFormVisible(false);
  }

  return (
    <StyledRegisterVideo>
      <button
        type="button"
        className="add-video"
        onClick={() => setFormVisible(true)}
      >
        +
      </button>
      {formVisibel ? (
        <form onSubmit={handleSubmitForm}>
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisible(false)}
            >
              X
            </button>
            <input
              type="text"
              name="titulo"
              placeholder="Título do video"
              value={formCadastro.values.titulo}
              onChange={e => formCadastro.handleChange(e)}
            />
            <input
              type="text"
              name="url"
              placeholder="URL do video"
              value={formCadastro.values.url}
              onChange={e => formCadastro.handleChange(e)}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
