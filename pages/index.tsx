import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row } from "react-bootstrap";
import LeagueTable from "../components/LeagueTable/LeagueTable";
import React from "react";

export default function Home() {
  return (
    <div className="index">
      <Container>
        <Row>
          <LeagueTable />
        </Row>
      </Container>
    </div>
  );
}
