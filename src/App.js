import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


    render() {
        var lifesteps = [
            {
                "date": "06/2009 – 06/2011",
                "title": "Abitur",
                "text": "St. Lioba-Schule Bad Nauheim - viert bester Abiturient - Abschlussnote: 1,2"
            },
            {
                "date": "06/2011 – 10/2014",
                "title": "Selbstständigkeit",
                "text": "mit den Online-Projekten: staydu.com (>16.000 Mitglieder; Erwähnung in der New York Times) und yourtraveljobs.com" +
                "\t\t\t\t(inkl. der größten internationalen Jobseite für Hostels)\n" +
                "\t\t\t\tTätigkeit: Programmierung, Marketing, Konzept und Support\n" +
                "\t\t\t\tGeschäfts– und Privatreisen nach: Südeuropa, Israel, \n" +
                "\t\t\t\tRussland, Mongolei, China, Nordkorea, Australien und\n" +
                "\t\t\t\tSüdostasien\n"
            },
            {
                "date": "10/2014 – 06/2015",
                "title": "Architektur Studium",
                "text": "nach 10 Jahren Arbeit in der IT der Versuch einer persönlichen \n" +
                "\t\t\t\tund beruflichen Neufindung\n"
            },
            {
                "date": "ab Herbst 2015",
                "title": "Bachelor Wirtschaftsinformatik",
                "text": ""
            },
            {
                "date": "ab Herbst 2015",
                "title": "Stipendiat Konrad Adenauer Stiftung",
                "text": ""
            },
            {
                "date": "ab Herbst 2017",
                "title": "cohooyo: FrontEnd & Founder",
                "text": "gemeinsam mit dem Personalunternehmen Falkenstein konzipierte und entwickelte ich die APP cohooyo"
            },
            {
                "date": "geplant ab Herbst 2018",
                "title": "Master Informatik",
                "text": "mit Schwerpunkt Machine Learning"
            },
        ]

        var stacks = [
            {
                "area": "Coding",
                "stacks": [
                    {
                        "name": "Scala",
                        "rating": 2,
                        "text": "I got to know Scala at Advanced Programming in University at snet.tu-berlin where I have been teaching Scala as a Tutor for 2 years. Advanced Concepts are the use of Akka",
                        "img": "https://ih0.redbubble.net/image.369005434.7112/flat,800x800,075,f.jpg"
                    },
                    {
                        "name": "Java",
                        "rating": 2,
                        "text": "Java is a consistent follower through university and got a bit closer due to my teaching activites at snet Berlin and studying of distributed systems at TU Berlin",
                        "img": "https://png.icons8.com/color/1600/java-coffee-cup-logo.png"

                    },
                    {
                        "name": "Python",
                        "rating": 3,
                        "text": "Python has been introduced to me in Machine Learning Context where I have used it in my bachelor thesis to create a convolutional network with tensorflow. I also played with django.",
                        "img": "https://vignette.wikia.nocookie.net/lpunb/images/e/e4/Python.png/revision/latest?cb=20151113030452"
                    },
                    {
                        "name": "PHP",
                        "rating": 3,
                        "text": "I learned to program in PHP with 14 years - I have mainly used it for web development (a lot of own scripts and wordpress)",
                        "img": "https://www.homepage-anleitung.de/wp-content/uploads/2015/06/php.png"
                    },
                    {
                        "name": "Javascript & Typescript",
                        "rating": 3,
                        "text": "I teach Javascript at university in 'Webtechnolgien'. I developed Aps using Angular 4 & Ionic 3. Recently I got into react.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"
                    },
                    {
                        "name": "Ruby",
                        "rating": 1,
                        "text": "basic knowledge of ruby on rails.",
                        "img": "https://pre00.deviantart.net/ec01/th/pre/i/2013/008/1/9/ruby_by_sakatagintoki117-d5qwq2l.png"
                    },
                ]
            },
            {
                "area": "IT Services",
                "stacks": [
                    {
                        "name": "AWS",
                        "text": "I know and understand the basic concepts of AWS and I am starting to migrating web pages to AWS",
                        "rating": 1,
                        "img": "https://pbs.twimg.com/profile_images/907648699718922241/_XyenLcK.jpg"
                    },

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

        var lifestepList = lifesteps.map(function (e) {
            return <Lifestep title={e.title} text={e.text} date={e.date}/>
        })

        const smallImage = {
            maxWidth: '60px'
        }

        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img
                            src={"http://specialedtech.net/wp-content/uploads/2016/04/code-org-logo.png"}
                            className="App-logo" alt="logo"/>
                        <h1 className="App-title">Digital Artisan<br/>Alessandro Schneider</h1>
                    </header>
                    <p className="App-intro">
                    </p>
                </div>

                <div>
                    <Title name={"Legend"}/>
                    <ul>
                        <li>
                            <img src={"1.png"} style={smallImage}/> first experience with stack/technology
                        </li>
                        <li>
                            <img src={"2.png"} style={smallImage}/> good understanding of concepts and used it in
                            serveral contexts/exercises

                        </li>
                        <li>
                            <img src={"3.png"} style={smallImage}/> used stack/technology in production/project

                        </li>
                    </ul>
                </div>

                <div className={"skills"}>
                    <Title name={"Skills"}/>

                    {areaList}

                </div>

                <div className={"lebenslauf"}>
                    <Title name={"CV"}/>
                    {lifestepList}


                </div>


            </div>
        );
    }
}


class Lifestep extends Component {
    render() {
        return <div className={"Lifestep"}>
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.date}</p>

            </div>
            <div>{this.props.text}</div>
        </div>
    }
}

class Title extends Component {
    render() {
        return <div className={"Title"}><h2>{this.props.name}</h2></div>
    }
}


class Area extends Component {
    render() {
        var stackList = this.props.stacks.map(function (e) {
            return <Skill bgcolor={"lightgrey"} name={e.name} img={e.img} rating={e.rating} text={e.text}/>
        })

        return <div className={"Area"}>
            <div>{this.props.name} </div>
            <div>
                {stackList}


            </div>
            <br/>

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
            borderBottom: "4px solid grey"
        }

        return (
            <div className={"Skill"} style={skillBG}>
                <div style={divStyle}>
                    <img src={this.props.img} style={smallImage}/><br/>
                    {this.props.name}<br/>
                    <img src={this.props.rating + ".png"} style={smallImage}/>
                </div>
                <div style={centerDiv}>{this.props.text}</div>
            </div>

        )
    }
}

export default App;
