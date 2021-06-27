import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import PossessivePronouns from './PossessivePronouns';




const Pronouns = () => {
  return (
    <Row>
      <Col md="6" sm="12">
        <Card>
          <Card.Header className="card-header-primary">
            <h4 className="card-title ">Personal</h4>
            <p className="card-category">Pronouns</p>
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
                  <tr className="sing">
                    <td>1</td>
                    <td>ich</td>
                    <td>mich</td>
                    <td>mir</td>
                  </tr>
                  <tr className="sing">
                    <td>2</td>
                    <td>du</td>
                    <td>dich</td>
                    <td>dir</td>
                  </tr>
                  <tr className="sing">
                    <td>M</td>
                    <td>er</td>
                    <td>ihn</td>
                    <td>ihm</td>
                  </tr>
                  <tr className="sing">
                    <td>F</td>
                    <td>sie</td>
                    <td>sie</td>
                    <td>ihr</td>
                  </tr>
                  <tr className="sing">
                    <td>N</td>
                    <td>es</td>
                    <td>es</td>
                    <td>ihm</td>
                  </tr>
                  <tr className="plur">
                    <td>1</td>
                    <td>wir</td>
                    <td>uns</td>
                    <td>uns</td>
                  </tr>
                  <tr className="plur">
                    <td>2</td>
                    <td>ihr</td>
                    <td>euch</td>
                    <td>euch</td>
                  </tr>
                  <tr className="plur">
                    <td>3</td>
                    <td>sie</td>
                    <td>sie</td>
                    <td>ihnen</td>
                  </tr>
                  <tr className="plur">
                    <td>*</td>
                    <td>Sie</td>
                    <td>Sie</td>
                    <td>Ihnen</td>
                  </tr>

                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md="6" sm="12">
        <PossessivePronouns/>
       
      </Col>
    </Row>

  );
}

export default Pronouns;
