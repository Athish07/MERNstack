import React from "react";
class sl extends React.Component
{
  constructor(props)
  {
    super(props)
    console.log("a1")
    this.state({data:null});
  }
  static getDerivedStateFromProps(props, state) {
    console.log("a2")
    return null
  }

  componentDidMount()
  {
    console.log("3.componentDidMount called");

  }

}