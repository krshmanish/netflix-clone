import React from "react";
import Banner from "../banner/Banner";
import Nav from "../nav/Nav";
import Row from "../row/Row";
import requests from "./../../Requests";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow="true"
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
