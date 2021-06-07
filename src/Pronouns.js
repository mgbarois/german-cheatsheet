import React from 'react';
import './App.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PossessivePronouns from './PossessivePronouns';




const Pronouns = () => {
  return (
    <Row>
      <Col md="6" sm="12">
        <Card>
          <Card.Header as="h5" className="card-header-primary">
            <h4 className="card-title ">Personal</h4>
            <p className="card-category"> Here is a subtitle for this table</p>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table className="table">
                <thead className=" text-primary">
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Nom.</th>
                    <th>Acc.</th>
                    <th>Dat.</th>
                    <th>Gen.</th>
                  </tr>

                </thead>
                <tbody>
                  <tr>
                    <td rowspan="5">S</td>
                    <td>1</td>
                    <td>ich</td>
                    <td>mich</td>
                    <td>mir</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>du</td>
                    <td>dich</td>
                    <td>dir</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>er</td>
                    <td>ihn</td>
                    <td>ihm</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td>sie</td>
                    <td>sie</td>
                    <td>ihr</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>N</td>
                    <td>es</td>
                    <td>es</td>
                    <td>ihm</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td rowspan="4">P</td>
                    <td>1</td>
                    <td>wir</td>
                    <td>uns</td>
                    <td>uns</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>ihr</td>
                    <td>euch</td>
                    <td>euch</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>sie</td>
                    <td>sie</td>
                    <td>ihnen</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>Sie</td>
                    <td>Sie</td>
                    <td>Ihnen</td>
                    <td></td>
                  </tr>

                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md="6" sm="12">
        <PossessivePronouns/>
        <Card>
          <Card.Header as="h5" className="card-header-primary">
            <h4 className="card-title ">Possessive</h4>
            <p className="card-category"> Here is a subtitle for this table</p>
          </Card.Header>
          <Card.Body>
            <Tabs>
              <Tab>              
            <div className="table-responsive">
              <Table className="table">
                <thead className=" text-primary">
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Nom.</th>
                    <th>Acc.</th>
                    <th>Dat.</th>
                    <th>Gen.</th>
                  </tr>

                </thead>
                <tbody>
                  <tr>
                    <td rowspan="5">S</td>
                    <td>1</td>
                    <td>mein</td>
                    <td>meinen</td>
                    <td>mir</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>dein</td>
                    <td>dich</td>
                    <td>dir</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>sein</td>
                    <td>ihn</td>
                    <td>ihm</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td>ihr</td>
                    <td>sie</td>
                    <td>ihr</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>N</td>
                    <td>sein</td>
                    <td>es</td>
                    <td>ihm</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td rowspan="4">P</td>
                    <td>1</td>
                    <td>unser</td>
                    <td>uns</td>
                    <td>uns</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>euer</td>
                    <td>euch</td>
                    <td>euch</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>ihr</td>
                    <td>sie</td>
                    <td>ihnen</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>Ihr</td>
                    <td>Sie</td>
                    <td>Ihnen</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            </Tab>

            <Tab>

            </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  );
}

export default Pronouns;
