import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const Articles = () => {
    return (
        <Row>
        <Col md="6" sm="12">
          <Card>
            <Card.Header className="card-header-primary">
              <h4 className="card-title ">Definite</h4>
              <p className="card-category">Articles</p>
            </Card.Header>
            <Card.Body>
            <div className="table-responsive">
                <Table className="table">
                  <thead className=" text-primary">
                    <tr>
                        <th>Case</th>
                        <th>Nom.</th>
                        <th>Acc.</th>
                        <th>Dat.</th>
                        <th>Gen.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Masc.</td>
                      <td>der</td>
                      <td>de<span className="infl">n</span></td>
                      <td>de<span className="infl">m</span></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Fem.</td>
                      <td>die</td>
                      <td>die</td>
                      <td>de<span className="infl">r</span></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Neut.</td>
                      <td>das</td>
                      <td>das</td>
                      <td>de<span className="infl">m</span></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Plur.</td>
                      <td>die</td>
                      <td>die</td>
                      <td>de<span className="infl">n</span></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md="6" sm="12">
          <Card>
            <Card.Header className="card-header-primary">
              <h4 className="card-title ">Indefinite</h4>
              <p className="card-category">Articles</p>
            </Card.Header>
            <Card.Body>
            <div className="table-responsive">
                <Table className="table">
                  <thead className=" text-primary">
                    <tr>
                        <th>Gender</th>
                        <th>Nom.</th>
                        <th>Acc.</th>
                        <th>Dat.</th>
                        <th>Gen.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Masc.</td>
                      <td>ein</td>
                      <td>ein<span className='infl'>en</span></td>
                      <td>ein<span className='infl'>em</span></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Fem.</td>
                      <td>ein<span className='infl'>e</span></td>
                      <td>ein<span className='infl'>e</span></td>
                      <td>ein<span className='infl'>er</span></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Neut.</td>
                      <td>ein</td>
                      <td>ein<span className='infl'>es</span></td>
                      <td>ein<span className='infl'>em</span></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Plur.</td>
                      <td>ein<span className='infl'>e</span></td>
                      <td>ein<span className='infl'>e</span></td>
                      <td>ein<span className='infl'>en</span></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
}

export default Articles;
