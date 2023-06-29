import { useState } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [namemerchandise, setNamemerchandise] = useState("");
  const [typemerchandise, setTypemerchandise] = useState("");
  const [volumemerchandise, setVolumemerchandise] = useState("");
  const [dataembarque, setDataembarque] = useState("");
  const [localembarque, setLocalembarque] = useState("");
  const [datadesembarque, setDatadesembarque] = useState("");
  const [localdesembarque, setLocaldesembarque] = useState("");
  const [danfefiscal, setDanfefiscal] = useState("");
  const [docimportacao, setDocimportacao] = useState("");
  const [docexportacao, setDocexportacao] = useState("");
  const [imgcontaineraberto, setImgcontaineraberto] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      namemerchandise === "" ||
      typemerchandise === "" ||
      volumemerchandise === "" ||
      dataembarque === "" ||
      localembarque === "" ||
      datadesembarque === "" ||
      localdesembarque === "" ||
      danfefiscal === "" ||
      docimportacao === "" ||
      docexportacao === "" ||
      imgcontaineraberto === "" ||
      message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      responsible_name: name,
      responsible_email: email,
      name_merchandise: namemerchandise,
      type_merchandise: typemerchandise,
      volume_merchandise: volumemerchandise,
      data_embarque: dataembarque,
      local_embarque: localembarque,
      data_desembarque: datadesembarque,
      local_desembarque: localdesembarque,
      danfe_fiscal: danfefiscal,
      doc_importacao: docimportacao,
      doc_exportacao: docexportacao,
      img_containeraberto: imgcontaineraberto,
      message: message,
    };

    emailjs
      .send(
        "service_7ugy94a",
        "template_7g59wmx",
        templateParams,
        "Qmnk5elKziH-nz_fL"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setNamemerchandise("");
          setTypemerchandise("");
          setVolumemerchandise("");
          setDataembarque("");
          setLocalembarque("");
          setDatadesembarque("");
          setLocaldesembarque("");
          setMessage("");
          setDanfefiscal("");
          setDocimportacao("");
          setDocexportacao("");
          setImgcontaineraberto("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <div className="container">
      <h1 className="title">Pedido de transporte</h1>
      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="O nome do responsável"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input"
          type="text"
          placeholder="O melhor e-mail do responsável"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <h3 className="title">Mercadoria</h3>
        <input
          className="input"
          type="text"
          placeholder="O nome da mercadoria"
          onChange={(e) => setNamemerchandise(e.target.value)}
          value={namemerchandise}
        />
        <input
          className="input"
          type="text"
          placeholder="O tipo da mercadoria"
          onChange={(e) => setTypemerchandise(e.target.value)}
          value={typemerchandise}
        />
        <input
          className="input"
          type="text"
          placeholder="O volume da mercadoria"
          onChange={(e) => setVolumemerchandise(e.target.value)}
          value={volumemerchandise}
        />
        <h3 className="title">Viagem</h3>
        <input
          className="input"
          type="text"
          placeholder="Data Embarque"
          onChange={(e) => setDataembarque(e.target.value)}
          value={dataembarque}
        />
        <input
          className="input"
          type="text"
          placeholder="Local Embarque"
          onChange={(e) => setLocalembarque(e.target.value)}
          value={localembarque}
        />
        <input
          className="input"
          type="text"
          placeholder="Data Desembarque"
          onChange={(e) => setDatadesembarque(e.target.value)}
          value={datadesembarque}
        />
        <input
          className="input"
          type="text"
          placeholder="Local Desembarque"
          onChange={(e) => setLocaldesembarque(e.target.value)}
          value={localdesembarque}
        />
        <h3 className="title">Documentos para anexar</h3>

        <input
          className="input"
          type="text"
          placeholder="Danfe Nota Fiscal"
          onChange={(e) => setDanfefiscal(e.target.value)}
          value={danfefiscal}
        />

        <input
          className="input"
          type="text"
          placeholder="Documento de Importação"
          onChange={(e) => setDocimportacao(e.target.value)}
          value={docimportacao}
        />

        <input
          className="input"
          type="text"
          placeholder="Documento de Exportação"
          onChange={(e) => setDocexportacao(e.target.value)}
          value={docexportacao}
        />

        <input
          className="input"
          type="text"
          placeholder="Imagens do Container Aberto"
          onChange={(e) => setImgcontaineraberto(e.target.value)}
          value={imgcontaineraberto}
        />

        <h3 className="title">Mais informações importantes</h3>
        <textarea
          className="textarea"
          placeholder={"Adicione aqui mais detalhes importantes."}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input className="button" type="submit" value="ENVIAR" />
      </form>
    </div>
  );
}

export default Order;
