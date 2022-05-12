import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
//import Modal from "react-modal";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


import "../App.css";

//Modal.setAppElement("#root");

const Profile = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const [name, setName] = useState("No data");
    const [email, setEmail] = useState("No data");
    const [firstName, setFirstName] = useState("No data");
    const [lastName, setLastName] = useState("No data");

    const [modalData, setModalData] = useState(["Název", "targetField", "data"]);

    const [modalShow, setShow] = useState(false);


    useEffect(() => {
        fetchData();
        /**
         * Změní data na stránce podle SELECT * FROM users where id_u=##
         */
        async function fetchData() {
            let data;
            await fetch("/user/detail?id=" + urlParams.get("id"))
                .then(async response => data = JSON.parse(await response.text()))
                .then(async response => setName(data[0].username))
                .then(async response => setEmail(data[0].email))
                .then(async response => setFirstName(data[0].firstName))
                .then(async response => setLastName(data[0].lastName));
        }
    }, [modalShow]);

    return (
        <>
            <div className="table-bordered mt-3 container">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Údaj
                            </TableCell>
                            <TableCell>
                                Hodnota
                            </TableCell>
                            <TableCell>
                                Upravit
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Username
                            </TableCell>
                            <TableCell>
                                {name}
                            </TableCell>
                            <TableCell>
                                <button type="button" onClick={() => { setModalData(["jméno", "username",name]); setShow(!modalShow); console.log(modalShow) }} className="btn btn-primary mt-3">
                                    Upravit
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Jméno
                            </TableCell>
                            <TableCell>
                                {firstName}
                            </TableCell>
                            <TableCell>
                                <button type="button" onClick={() => { setModalData(["křestní jméno", "firstName", firstName]); setShow(!modalShow); console.log(modalShow) }} className="btn btn-primary mt-3">
                                    Upravit
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Příjmení
                            </TableCell>
                            <TableCell>
                                {lastName}
                            </TableCell>
                            <TableCell>
                                <button type="button" onClick={() => { setModalData(["příjmení", "lastName", lastName]); setShow(!modalShow); console.log(modalShow) }} className="btn btn-primary mt-3">
                                    Upravit
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                E-mail
                            </TableCell>
                            <TableCell>
                                {email}
                            </TableCell>
                            <TableCell>
                                <button type="button" onClick={() => { setModalData(["email", "email", email]); setShow(!modalShow); console.log(modalShow) }} className="btn btn-primary mt-3">
                                    Upravit
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <Modal show={modalShow} onClick={() => {  }}>
                <Modal.Header closeButton>
                    <Modal.Title>Úprava dat</Modal.Title>
                </Modal.Header>
                <Modal.Body>Změnit {modalData[0]} <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text>{modalData[0]}</InputGroup.Text>
                        <FormControl
                            placeholder = {modalData[0]}
                            aria-label="Username"
                            type="text"
                            aria-describedby="basic-addon1"   
                            defaultValue={modalData[2]}
                            onChange={(e) => modalData[2] = e.target.value}
                        />
                    </InputGroup></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShow(!modalShow) }}>
                        Zrušit
                    </Button>
                    <Button variant="primary" onClick={() => { sendData(urlParams.get("id"), modalData[1], modalData[2]); setShow(!modalShow); }}>
                        Potvrdit změnu
                    </Button>
                </Modal.Footer>
            </Modal>
            <Outlet />
        </>
    );
}

/**
 * 
 * @param {number} id id uživatele k úpravě 
 * @param {string} columnName nazev sql sloupce ke změně
 * @param {string} data zmenit hodnotu sloupce záznamu na 
 */
function sendData(id, columnName, data) {
    const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
    });

    const urlencoded = new URLSearchParams();
    urlencoded.append("id",id);
    urlencoded.append(columnName,data);

    const opts = ({
        method: 'PATCH',
        headers: headers,
        body: urlencoded
    });

    fetch("/user/update", opts);
}

export default Profile;