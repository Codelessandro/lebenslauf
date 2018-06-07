import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


    render() {
        var area = [
            "Frontend"
        ]

        var stacks = [
            {
                "area": "Programming Languages",
                "stacks": [
                    {
                        "name": "Scala",
                        "rating": 2,
                        "text": "good university level; teaching Scala as a Tutor in Tu-Berlin for 2 years",
                        "img": "https://www.data-blogger.com/wp-content/uploads/2016/07/scala-logo-750x293.png"
                    },
                    {
                        "name": "Java",
                        "github": "",
                        "rating": 3
                    },
                    {
                        "name": "Python",
                        "github": "http://..."
                    }
                ]
            },
            {
                "area": "Frontend",
                "stacks": [
                    {
                        "name": "Angular 4",
                        "github": "http://www.web.de",
                        "rating": 3
                    },
                    {
                        "name": "Ionic 3",
                        "github": "",
                        "rating": 3
                    }
                ]
            },
            {
                "area": "Backend",
                "stacks": [
                    {
                        "name": "Scala Play",
                        "github": "http://www.web.de",
                        "rating": 3
                    }
                ]
            },
            {
                "area": "Robotics",
                "stacks": []
            },
            {
                "area": "Machine Learning",
                "stacks": []
            }
        ]


        var areaList = stacks.filter(e => e.stacks.length > 0).map(function (e) {
            return <Area name={e.area} stacks={e.stacks}/>;
        })


        return (
            <div>
                <div>build with github, react and webstorm</div>
                <div className="App">
                    <header className="App-header">
                        <img
                            src={"https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2015/06/aws-logo.png"}
                            className="App-logo" alt="logo"/>
                        <h1 className="App-title">Bewerbung - Alessandro Schneider</h1>
                    </header>
                    <p className="App-intro">
                    </p>
                </div>


                <div className={"skills"}>
                    <Title name={"Skills"}/>
                    <Area/>
                    <Area/>
                    <Area/>
                    <Area/>

                </div>

                <div className={"lebenslauf"}>
                    <Title name={"Lebenslauf"}/>
                    <LifeStep/>
                    <LifeStep/>

                </div>


            </div>
        );
    }
}


class LifeStep extends Component {
    render() {
        return <div className={"Lifestep"}>
            <div>
                <h3>St. Lioba Schule</h3>
                <p>(1991-2000)</p>

            </div>
            <div>In der St. Lioba schule verbrachte ich meine Grundschulzeot..</div>
        </div>
    }
}

class Title extends Component {
    render() {
        return <h2>{this.props.name}</h2>
    }
}


class Area extends Component {
    render() {
        return <div className={"Area"}>
            <div>AreaName</div>
            <div>
                <Skill bgcolor={"lightgrey"} name={"PHP"}
                       img={"https://png.icons8.com/color/1600/java-coffee-cup-logo.png"}/>
                <Skill name={"PHP"} img={"https://png.icons8.com/color/1600/java-coffee-cup-logo.png"}/>
                <Skill bgcolor={"lightgrey"} name={"PHP"}
                       img={"https://png.icons8.com/color/1600/java-coffee-cup-logo.png"}/>
                <Skill name={"PHP"} img={"https://png.icons8.com/color/1600/java-coffee-cup-logo.png"}/>
                <Skill bgcolor={"lightgrey"} name={"PHP"}
                       img={"https://png.icons8.com/color/1600/java-coffee-cup-logo.png"}/>
            </div>

        </div>

    }
}


class Skill extends Component {
    render() {
        const divStyle = {
            textAlign: 'center',
            width: '100px'
        };
        const centerDiv = {
            textAlign: 'center',
            marginTop: '10px'
        }
        const smallImage = {
            maxWidth: '60px'
        }
        const skillBG = {
            backgroundColor: this.props.bgcolor
        }

        return (
            <div className={"Skill"} style={skillBG}>
                <div style={divStyle}>
                    <img src={this.props.img} style={smallImage}/><br/>
                    {this.props.name}<br/>
                    <img src={"https://jenniferbresnick.files.wordpress.com/2015/04/1star.jpeg"} style={smallImage}/>
                </div>
                <div style={centerDiv}>with PHP I developed a lot of stuff..</div>
            </div>

        )
    }
}

export default App;
