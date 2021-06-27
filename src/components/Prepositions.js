import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const Articles = () => {

    const acc = [
        ['bis', 'until'],
        ['durch', 'through', 'Ich laufe durch die Tür'],
        ['für', 'for'],
        ['gegen', 'against'],
        ['ohne', 'without'],
        ['um', 'around']
    ]

    const dat = [
        ['ab', 'from, as of'],
        ['aus', 'out of, from'],
        ['außer', 'except for'],
        ['bei', 'next to, with/accompanying'],
        ['dank', 'thanks to'],
        ['mit', 'with'],
        ['nach', 'after'],
        ['seit', 'since'],
        ['von', 'from'],
        ['zu', 'to']
    ]

    const accDat = [
        ['an', 'at', 'Ich bin am Strand.'],
        ['auf', 'on, onto', 'Ich sitze auf dem Stuhl; Ich setze mich auf den Stuhl'],
        ['hinter', 'behind', 'Ich stehe hinter dem House; Ich gehe hinter das Haus.'],
        ['in', 'in', 'Ich stehe im Park; Ich gehe in den Park.'],
        ['neben', 'beside', 'Ich stehe neben dem Tisch; Ich falle neben den Tisch'],
        ['über', 'over, on top of, about', 'Das Flugzeug ist über dem Ocean; Das Flugzeug fliegt über den Ocean'],
        ['unter', 'below, under', 'Ich bin unter der Brücke; Ich fahre unter die Brücke'],
        ['vor', 'in front of'],
        ['zwischen', 'between']
    ]

    return (
        <>
            <Row>
                <Col md="12">
                    <Card>
                        <Card.Header className="card-header-primary">
                            <h4 className="card-title ">Accusitive</h4>
                            <p className="card-category">Prepositions</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>Preposition</th>
                                            <th>Translation</th>
                                            <th>Example</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            acc.map(prep => {
                                                return (
                                                    <tr>
                                                        <td><span className="infl">{prep[0]}</span></td>
                                                        <td>{prep[1]}</td>
                                                        <td>{prep[2]}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card>
                        <Card.Header className="card-header-primary">
                            <h4 className="card-title ">Dative</h4>
                            <p className="card-category">Prepositions</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>Preposition</th>
                                            <th>Translation</th>
                                            <th>Example</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dat.map(prep => {
                                                return (
                                                    <tr>
                                                        <td><span className="infl">{prep[0]}</span></td>
                                                        <td>{prep[1]}</td>
                                                        <td>{prep[2]}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card>
                        <Card.Header className="card-header-primary">
                            <h4 className="card-title ">Accusative or Dative</h4>
                            <p className="card-category">Prepositions</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>Preposition</th>
                                            <th>Translation</th>
                                            <th>Example</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            accDat.map(prep => {
                                                return (
                                                    <tr>
                                                        <td><span className="infl">{prep[0]}</span></td>
                                                        <td>{prep[1]}</td>
                                                        <td>{prep[2]}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Articles;
