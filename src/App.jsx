import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Ingame from './pages/Ingame'
import KillLeaderboard from './pages/KillLeaderboard'
import MapData from './pages/MapData'
import MatchRankings from './pages/MatchRankings'
import MatchTopFraggers from './pages/MatchTopFraggers'
import OverallRankings from './pages/OverallRankings'
import PointsGraph from './pages/PointsGraph'
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    Home
                </Route>

                <Route exact path='/killleaderboard'>
                    <KillLeaderboard></KillLeaderboard>
                </Route>

                <Route exact path='/mapdata'>
                    <MapData></MapData>
                </Route>

                <Route exact path='/matchrankings'>
                    <MatchRankings></MatchRankings>
                </Route>

                <Route exact path='/matchtopfraggers'>
                    <MatchTopFraggers />
                </Route>

                <Route exact path='/overallrankings1'>
                    <OverallRankings index={1}></OverallRankings>
                </Route>

                <Route exact path='/overallrankings2'>
                    <OverallRankings index={2}></OverallRankings>
                </Route>

                <Route exact path='/pointsgraph'>
                    <PointsGraph></PointsGraph>
                </Route>
                <Route exact path='/ingame'>
                    <Ingame></Ingame>
                </Route>

            </Switch>
        </Router>
    )
}

export default App
