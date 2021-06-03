import  React from 'react'
import ReactDOM from 'react-dom'
import RootComponent from './RootComponent'
import Parent from './family/parent';
import Alphabet from './Alphabet/alphabet';
import Counter from './counter/counter';
import LifeCycle from './lifecycle/lifecycle';
import RemoteAPIData from './remote/apiData';
import ParentForm from './Forms/parentForm';

var position = document.getElementById('rootid');

ReactDOM.render(<div>
                    <RootComponent></RootComponent>
                    <RootComponent></RootComponent>
                    <hr></hr>
                    <Parent sonname="Mehul" daughtername="Inaya">Mehta</Parent>
                    <hr></hr>
                    <Parent sonname="Ankit" daughtername="Komal">Kapoor</Parent>
                    <hr></hr>
                    <Alphabet fcolor="red" bcolor="yellow">R</Alphabet>
                    <Alphabet fcolor="green" bcolor="blue">A</Alphabet>
                    <Alphabet fcolor="yellow" bcolor="orange">I</Alphabet>
                    <Alphabet fcolor="black" bcolor="grey">N</Alphabet>
                    <Alphabet fcolor="blue" bcolor="yellow">B</Alphabet>
                    <Alphabet fcolor="orange" bcolor="green">O</Alphabet>
                    <Alphabet fcolor="red" bcolor="yellow">W</Alphabet>
                    <hr></hr>
                    <Counter></Counter>
                    <hr></hr>
                    
                </div>,position)
                ReactDOM.render(<LifeCycle></LifeCycle>,document.getElementById("life"))
                ReactDOM.render(<RemoteAPIData></RemoteAPIData>,document.getElementById("remote"))
                ReactDOM.render(<ParentForm></ParentForm>,document.getElementById("form"))