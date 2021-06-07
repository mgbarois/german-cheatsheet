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
              <h4 className="card-title ">Definite articles</h4>
              <p className="card-category"> Here is a subtitle for this table</p>
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
              <h4 className="card-title ">Indefinite Articles</h4>
              <p className="card-category"> Here is a subtitle for this table</p>
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

        <Col md="12">
          <div className="card card-plain">
            <div className="card-header card-header-primary">
              <h4 className="card-title mt-0"> Table on Plain Background</h4>
              <p className="card-category"> Here is a subtitle for this table</p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>$36,738</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td>$23,789</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td>$56,142</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td>$38,735</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td>$63,542</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td>$78,615</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
    </Row>
      
    );
}

export default Articles;
