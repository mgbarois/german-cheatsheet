import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import './Dashboard.scss';


class Dashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      translDir: "de-en",
      translInput: '',
      translOutput: []
    }
  }

  onSwitchLangDir = () => {
    this.setState(state => ({
      translDir: state.translDir === "de-en" ? "en-de" : "de-en",
      translInput: '',
      translOutput: []
    }))
  }

  onInputChange = (e) => {
    this.setState({
      translInput: e.target.value,
      translOutput: []
    })
  }

  fetchTranslation = (inputWord) => {
    console.log('Fetching translation for: ', inputWord);

    fetch(`https://petapro-translate-v1.p.rapidapi.com/?query=${inputWord}&langpair=${this.state.translDir}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "petapro-translate-v1.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          translOutput: data.slice(0, 2)
        })
      })
      .catch(err => {
        console.error(err);
        this.setState({
          translOutput: ["error"]
        })
      });

  }

  onInputSubmit = () => {
    console.log('Submitting german word');
    const germanWord = this.state.translInput;
    console.log('Word: ', germanWord);
    this.fetchTranslation(germanWord);
  }

  render() {

    const langs = this.state.translDir === "de-en" 
    ? {
      targLangCode:2,
      sourceLang: "German",
      targLang: "English",
      article: "a"
     }
     : {
      targLangCode:1,
      sourceLang: "English",
      targLang: "German",
      article: "an"
     };

    const output = this.state.translOutput;

    const translationOutput = () => {
      console.log('Formatting translation output');
      if (output.length === 0) {
        return ("")
      }
      else if (output[0] === 'error') {
        return (
          <p variant="error">
            Sorry, no translation found. Make sure to enter a valid {langs.sourceLang} word.
          </p>
        );
      }
      return (
        <div id="translation-table" className="table-responsive">
          <Table className="table">
            <thead className=" text-primary">
              <tr>
                <th>Translation</th>
                <th>Synonyms</th>
                <th>PoS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>{output[0][`l${langs.targLangCode}_text`]}</b></td>
                <td>{output[0][`synonyme${langs.targLangCode}`]}</td>
                <td><span className='infl'>{output[0]["wortart"]}</span></td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    }

    return (
      <>
        <Container id="dashboard">
          <Row>
            <Col md="12">
              <div id="translation-section">
                <Card>
                  <Card.Header className="card-header-info">
                    <h4 className="card-title">Translate from the Dictionary</h4>
                  </Card.Header>
                  <Card.Body id="translation-card-body">
                    <p>{langs.sourceLang}
                      <Button
                        className="lang-switcher"
                        variant="light"
                        onClick={this.onSwitchLangDir}>
                        <i className="fa fa-arrows-alt-h" />
                      </Button>{langs.targLang}</p>
                    <input
                      id="translation-input"
                      type='text'
                      placeholder={`Enter ${langs.article} ${langs.sourceLang} word`}
                      onChange={this.onInputChange}
                    />
                    <Button
                      id="translation-button"
                      variant="info"
                      onClick={this.onInputSubmit}
                    >Translate</Button>
                    {translationOutput()}
                  </Card.Body>
                </Card>                
              </div>
              <Button variant="info" onClick={this.fetchTranslation}>Translate</Button>
              {
                [
                  'primary',
                  'secondary',
                  'success',
                  'danger',
                  'warning',
                  'info',
                  'light',
                  'dark',
                ].map((variant, idx) => {
                  return (
                    <Alert key={idx} variant={variant}>
                      This is a {variant} alert—check it out!
                    </Alert>
                  )
                })
              }
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;


// fetch("https://libretranslate.com/translate", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    // },
    //   body: JSON.stringify({
    //     q: "Hello!",
    //     source: "en",
    //     target: "es",
    //     api_key:'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    //   })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       translation: data.translatedText
    //     })
    //   });