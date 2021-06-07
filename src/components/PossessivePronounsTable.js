import React from 'react';
import Table from 'react-bootstrap/Table';

const PossessivePronounsTable = (props) => {
    const {nom, acc, dat} = props.infl;
    return (

        <div className="table-responsive">
            <Table className="table">
                <thead className=" text-primary">
                    <tr>
                        <th></th>
                        <th>Nom.</th>
                        <th>Acc.</th>
                        <th>Dat.</th>
                        <th>Gen.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="sing">
                        <td>1</td>
                        <td>mein<span className="infl">{nom}</span></td>
                        <td>mein<span className="infl">{acc}</span></td>
                        <td>mein<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="sing">
                        <td>2</td>
                        <td>dein<span className="infl">{nom}</span></td>
                        <td>dein<span className="infl">{acc}</span></td>
                        <td>dein<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="sing">
                        <td>M</td>
                        <td>sein<span className="infl">{nom}</span></td>
                        <td>sein<span className="infl">{acc}</span></td>
                        <td>sein<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="sing">
                        <td>F</td>
                        <td>ihr<span className="infl">{nom}</span></td>
                        <td>ihr<span className="infl">{acc}</span></td>
                        <td>ihr<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="sing">
                        <td>N</td>
                        <td>sein<span className="infl">{nom}</span></td>
                        <td>sein<span className="infl">{acc}</span></td>
                        <td>sein<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="plur">
                        <td>1</td>
                        <td>unser<span className="infl">{nom}</span></td>
                        <td>unser<span className="infl">{acc}</span></td>
                        <td>unser<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="plur">
                        <td>2</td>
                        <td>euer<span className="infl">{nom}</span></td>
                        <td>euer<span className="infl">{acc}</span></td>
                        <td>euer<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="plur">
                        <td>3</td>
                        <td>ihr<span className="infl">{nom}</span></td>
                        <td>ihr<span className="infl">{acc}</span></td>
                        <td>ihr<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                    <tr className="plur">
                        <td>*</td>
                        <td>Ihr<span className="infl">{nom}</span></td>
                        <td>Ihr<span className="infl">{acc}</span></td>
                        <td>Ihr<span className="infl">{dat}</span></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default PossessivePronounsTable;