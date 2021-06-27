import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import NoteContent from './NoteContent';

//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const noArticle = (
    <p>Same as <a href='#'>Pronouns</a></p>
)

const defArticle = (
    <ul>
        <li>All have at least <span className="infl">e</span> ending.</li>
        <li>When <span className="infl">r</span> or <span className="infl">m</span> already used in article, use <span className="infl">en</span> on adjective.</li>
        <li>If article ends in <span className="infl">en</span>, adjective will also end in <span className="infl">en</span>.</li>
    </ul>
)

const indefArticle = (
    <ul>
        <li>All have at least <span className="infl">e</span> ending.</li>
        <li>When <span className="infl">r</span> or <span className="infl">m</span> already used in article, use <span className="infl">en</span> on adjective.</li>
        <li>If articles is <span className="infl">en</span>, adjective ending will also be <span className="infl">en</span>.</li>
    </ul>
)

const Articles = () => {
    return (
        <div>
            <Row>
                <Col md="8" sm="12">
                    <Card className="card-plain">
                        <Card.Header className="card-header-primary">
                            <h4 className="card-title ">No Article or Pronoun</h4>
                            <p className="card-category">Adjectives</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-hover">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th></th>
                                            <th>Nom.</th>
                                            <th>Acc.</th>
                                            <th>Dat.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>M</td>
                                            <td>heiß<span className="infl">er</span> Kaffee</td>
                                            <td>heiß<span className='infl'>en</span> Kaffee</td>
                                            <td>heiß<span className='infl'>em</span> Kaffee</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>kalt<span className='infl'>e</span> Milch</td>
                                            <td>kalt<span className='infl'>e</span> Milch</td>
                                            <td>kalt<span className='infl'>er</span> Milch</td>
                                        </tr>
                                        <tr>
                                            <td>N</td>
                                            <td>frisch<span className="infl">es</span> Brot</td>
                                            <td>frisch<span className='infl'>es</span> Brot</td>
                                            <td>frisch<span className='infl'>em</span> Brot</td>
                                        </tr>
                                        <tr>
                                            <td>P</td>
                                            <td>warm<span className='infl'>e</span> Brötchen</td>
                                            <td>warm<span className='infl'>e</span> Brötchen</td>
                                            <td>warmen<span className='infl'>en</span> Brötchen</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={NoteContent(noArticle)}>
                                <Button variant="dark">Notes</Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>


                </Col>




                <Col md="4" sm="12">
                    <Card>
                        <Card.Header className="card-header-info">
                            <h4 className="card-title">Simplified</h4>
                            <p className="card-category"></p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th></th>
                                            <th>Nom.</th>
                                            <th>Acc.</th>
                                            <th>Dat.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>M</td>
                                            <td><span className="infl">er</span></td>
                                            <td><span className='infl'>en</span></td>
                                            <td><span className='infl'>em</span></td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td><span className='infl'>e</span></td>
                                            <td><span className='infl'>e</span></td>
                                            <td><span className='infl'>er</span></td>
                                        </tr>
                                        <tr>
                                            <td>N</td>
                                            <td><span className="infl">es</span></td>
                                            <td><span className='infl'>es</span></td>
                                            <td><span className='infl'>em</span></td>
                                        </tr>
                                        <tr>
                                            <td>P</td>
                                            <td><span className='infl'>e</span></td>
                                            <td><span className='infl'>e</span></td>
                                            <td><span className='infl'>en</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

            <Row>
                <Col md="8" sm="12">
                    <Card className="card-plain">
                        <Card.Header className="card-header-primary">
                            <h4 className="card-title ">After Definite Articles</h4>
                            <p className="card-category">Adjectives</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-hover">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th></th>
                                            <th>Nom.</th>
                                            <th>Acc.</th>
                                            <th>Dat.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>M</td>
                                            <td>der nett<span className="infl">e</span> Mann</td>
                                            <td>den nett<span className="infl">en</span> Mann</td>
                                            <td>dem nett<span className="infl">en</span> Mann</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>die nett<span className="infl">e</span> Frau</td>
                                            <td>die nett<span className="infl">e</span> Frau</td>
                                            <td>der nett<span className="infl">en</span></td>
                                        </tr>
                                        <tr>
                                            <td>N</td>
                                            <td>das nett<span className="infl">e</span> Kind</td>
                                            <td>das nett<span className="infl">e</span> Kind</td>
                                            <td>dem nett<span className="infl">en</span> Kind</td>
                                        </tr>
                                        <tr>
                                            <td>P</td>
                                            <td>die nett<span className="infl">en</span> Leute</td>
                                            <td>die nett<span className="infl">en</span> Leute</td>
                                            <td>den nett<span className="infl">en</span> Leute</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={NoteContent(defArticle)}>
                                <Button variant="dark">Notes</Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md="4" sm="12">
                    <Card>
                        <Card.Header className="card-header-info">
                            <h4 className="card-title ">Simplified</h4>
                            <p className="card-category"></p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-hover">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th></th>
                                            <th>Nom.</th>
                                            <th>Acc.</th>
                                            <th>Dat.</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>M</td>
                                            <td><span className="infl">e</span></td>
                                            <td><span className="infl">en</span></td>
                                            <td><span className="infl">en</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td><span className="infl">e</span></td>
                                            <td><span className="infl">e</span></td>
                                            <td><span className="infl">en</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>N</td>
                                            <td><span className="infl">e</span></td>
                                            <td><span className="infl">e</span></td>
                                            <td><span className="infl">en</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>P</td>
                                            <td><span className="infl">en</span></td>
                                            <td><span className="infl">en</span></td>
                                            <td><span className="infl">en</span></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md="8" sm="12">
                    <Card className="card-plain">
                        <Card.Header className="card-header-primary">
                            <h4 className="card-title ">After Indefinite Articles & Possessive Pronouns</h4>
                            <p className="card-category">Adjectives</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-hover">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th></th>
                                            <th>Nom.</th>
                                            <th>Acc.</th>
                                            <th>Dat.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>M</td>
                                            <td>ein klein<span className="infl">er</span> Hund</td>
                                            <td>einen klein<span className='infl'>en</span> Hund</td>
                                            <td>einem klein<span className='infl'>en</span> Hund</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>eine klein<span className='infl'>e</span> Katze</td>
                                            <td>eine klein<span className='infl'>e</span> Katze</td>
                                            <td>einer klein<span className='infl'>en</span> Katze</td>
                                        </tr>
                                        <tr>
                                            <td>N</td>
                                            <td>ein klein<span className="infl">es</span> Kaninchen</td>
                                            <td>ein klein<span className='infl'>es</span> Kaninchen</td>
                                            <td>einem klein<span className='infl'>en</span> Kaninchen</td>
                                        </tr>
                                        <tr>
                                            <td>P</td>
                                            <td>meine klein<span className='infl'>en</span> Vögel</td>
                                            <td>meinen klein<span className='infl'>en</span> Vögel</td>
                                            <td>meinen klein<span className='infl'>en</span> Vögel<span className="infl">n</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <OverlayTrigger trigger="click" placement="right" overlay={NoteContent(indefArticle)}>
                                <Button variant="dark">Notes</Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4" sm="12">
                    <Card>
                        <Card.Header className="card-header-info">
                            <h4 className="card-title ">Simplified</h4>
                            <p className="card-category"></p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th></th>
                                            <th>Nom.</th>
                                            <th>Acc.</th>
                                            <th>Dat.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>M</td>
                                            <td><span className="infl">er</span></td>
                                            <td><span className='infl'>en</span></td>
                                            <td><span className='infl'>en</span></td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td><span className='infl'>e</span></td>
                                            <td><span className='infl'>e</span></td>
                                            <td><span className='infl'>en</span></td>
                                        </tr>
                                        <tr>
                                            <td>N</td>
                                            <td><span className="infl">es</span></td>
                                            <td><span className='infl'>es</span></td>
                                            <td><span className='infl'>en</span></td>
                                        </tr>
                                        <tr>
                                            <td>P</td>
                                            <td><span className='infl'>en</span></td>
                                            <td><span className='infl'>en</span></td>
                                            <td><span className='infl'>en+n</span></td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Articles;
