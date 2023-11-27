import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import { getTiendasLocal } from "../controller/gettienda";
import { Tienda } from "../models/tienda.m";

const Listado = () => {
  const [tiendas, setTiendas] = useState<Tienda[]>([]);
  const [query, setQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState<Tienda | null>(null);

  useEffect(() => {
    const ObtenerTodos = async () => {
      const allTiendas = await getTiendasLocal();
      setTiendas(allTiendas);
    };

    ObtenerTodos();
  }, []);

  const handleCardClick = (tienda: Tienda) => {
    setSelectedCard(tienda);
  };

  const filtrarProductos = tiendas?.slice(0, 85).filter((tienda) => {
    return tienda.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Biblioteca Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <input
            value={query}
            placeholder="Buscar"
            onChange={(event) => setQuery(event.target.value.trim())}
            type="text"
          />
        </Navbar.Collapse>
      </Navbar>

      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-2">
            {selectedCard ? (
              <Card className="mx-auto" style={{ width: '18rem' }}>
                <Card.Header>TIPO: {selectedCard.type} </Card.Header>
                <Card.Img width={100} variant="top" src={selectedCard.imgnormal || 'placeholder.png'} className="d-block mx-auto w-100" />
                <Card.Body>
                  <Card.Title className="text-center"><strong>{selectedCard.id}  </strong>-{selectedCard.name} </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image
                        width={15}
                        src="https://cdn-icons-png.flaticon.com/128/1673/1673624.png"
                      />
                      <b> HP: </b>{selectedCard.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={15}
                        src="https://cdn-icons-png.flaticon.com/128/664/664487.png"
                      />
                      <b> ATAQUE: </b>   {selectedCard.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={15}
                        src="https://cdn-icons-png.flaticon.com/128/664/664487.png"
                      />
                      <b> DEFENSA: </b> {selectedCard.defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={15}
                        src="https://cdn-icons-png.flaticon.com/128/664/664487.png"
                      />
                      <b> ESPECIAL DEFENSA: </b>{selectedCard.sp_def}
                    </ListGroup.Item>                    
                    <ListGroup.Item>
                      <Figure.Image
                        width={15}
                        src="https://cdn-icons-png.flaticon.com/128/664/664487.png"
                      />
                      <b> VELOCIDAD: </b>{selectedCard.speed}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ) : (
              filtrarProductos?.map((tienda) => (
                <Card
                  key={tienda.id}
                  className="mx-auto"
                  style={{ width: '18rem' }}
                  onClick={() => handleCardClick(tienda)}
                >
                  <Card.Header>TIPO: {tienda.type} </Card.Header>
                  <Card.Img width={100} variant="top" src={tienda.imgnormal || 'placeholder.png'} className="d-block mx-auto w-100" />
                  <Card.Body>
                    <Card.Title className="text-center"><strong>{tienda.id}  </strong>-{tienda.name} </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Figure.Image
                          width={15}
                          src="https://cdn-icons-png.flaticon.com/128/664/664487.png"
                        />
                        <b> HP: </b>{tienda.hp}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Figure.Image
                          width={15}
                          src="https://cdn-icons-png.flaticon.com/128/664/664487.png"
                        />
                        <b> ATAQUE: </b>   {tienda.attack}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Figure.Image
                          width={15}
                          src="https://cdn-icons-png.flaticon.com/128/664/664487.png"
                        />
                        <b> DEFENSA: </b> {tienda.defense}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listado;
