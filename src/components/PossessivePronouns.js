import React from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';


import PossessivePronounsTable from './PossessivePronounsTable';
import './PossessivePronouns.scss';


class PossessivePronouns extends React.Component {
    constructor() {
        super();
        this.state = {
            gender: 'masc',
            infl: {
                nom: '',
                acc: 'en',
                dat: 'em'
            }
        }
    }

    switchInflections = (key) => {
        console.log(key);
        switch (key) {
            case 'masc':
                this.setState({
                    infl: {
                        nom: '',
                        acc: 'en',
                        dat: 'em'
                    }
                });
                break;
            case 'neut':
                this.setState({
                    infl: {
                        nom: '',
                        acc: '',
                        dat: 'em'
                    }
                });
                break;
            case 'fem':
                this.setState({
                    infl: {
                        nom: 'e',
                        acc: 'e',
                        dat: 'er'
                    }
                });
                break;
            case 'plu':
                this.setState({
                    infl: {
                        nom: 'e',
                        acc: 'e',
                        dat: 'en'
                    }
                });
                break;
            default:
                break;
        }

    }

    switchTabs = (key) => {
        console.log(key);
        this.setState({
            gender: key
        })
        this.switchInflections(key);
    }
    //const [key, setKey] = useState('home');
    //https://reactjs.org/docs/hooks-state.html

    render() {

        return (
            <Card>
                <Card.Header id="pos-pro-card-header" className="card-header-primary">
                    <div id="pos-pro-title">
                        <h4 className="card-title ">Possessive</h4>
                        <p className="card-category">Pronouns</p>
                    </div>
                    <div id="card-header-pills">
                        <div class="nav-tabs-navigation">
                            <div class="nav-tabs-wrapper">
                                <Nav
                                    className="nav nav-tabs"
                                    defaultActiveKey='masc'
                                    onSelect={(key => this.switchTabs(key))}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="masc">Masc</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fem">Fem</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="neut">Neut</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                            <PossessivePronounsTable infl={this.state.infl} />
                </Card.Body>
            </Card>
            // <Card>
            //     <Card.Header className="card-header-primary">
            //         <h4 className="card-title ">Possessive</h4>
            //         <p className="card-category">Pronouns</p>
            //     </Card.Header>
            //     <Card.Body>
            //         <Tabs
            //             id="controlled-tab-example"
            //             onSelect={(key => this.switchTabs(key))}
            //         >
            //             <Tab eventKey="masc" title="Masc.">
            //                 <PossessivePronounsTable infl={this.state.infl} />
            //             </Tab>
            //             <Tab eventKey="fem" title="Fem.">
            //                 <PossessivePronounsTable infl={this.state.infl} />
            //             </Tab>
            //             <Tab eventKey="neut" title="Neut.">
            //                 <PossessivePronounsTable infl={this.state.infl} />
            //             </Tab>
            //             <Tab eventKey="plu" title="Plur.">
            //                 <PossessivePronounsTable infl={this.state.infl} />
            //             </Tab>
            //         </Tabs>
            //     </Card.Body>
            // </Card>
        )
    }
}

export default PossessivePronouns;
