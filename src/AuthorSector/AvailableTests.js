import React from 'react';
import { Link } from 'react-router-dom';

class TestName extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      testData: "",
      examName: "",
      examId: ""
    }
    this.loadTestDetailsFromServer = this.loadTestDetailsFromServer.bind(this);
    this.componentRefresh = this.componentRefresh.bind(this);
  }

  // to load test information from server
  loadTestDetailsFromServer() {
    console.log("In fetch test data function examId =" + this.state.examId);
    const formData = { examId: this.state.examId };
    // fetch('http://localhost:3001/api/testDetails')
    fetch('http://localhost:3001/api/testDetails', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(testData => {
        this.setState({ testData });
      })
  }

  // to set state = examId from local storage if empty
  settingExamId() {
    console.log("settingExamId funtion running");
    if (this.state.examId === "" || this.state.examId === null || this.state.examId === undefined) {
      var e = localStorage.getItem('exam_id');
      this.setState({
        examId: e
      })
    } else {
      console.log("Exam Id already available")
    }
  }

  // to set state = examName from local storage if empty
  settingExamName() {
    console.log("settingExamId funtion running");
    if (this.state.examName === "" || this.state.examName === null || this.state.examName === undefined) {
      var e = localStorage.getItem('exam_name');
      this.setState({
        examName: e
      })
    } else {
      console.log("Exam Name already available")
    }
  }

  // this function is called automatically before render
  async componentWillMount() {
    console.log("Component is mounting...")
    await this.settingExamId();
    await this.settingExamName();
    this.loadTestDetailsFromServer();
  }

  // this function automatically gets called when component is destroyed
  componentWillUnmount() {
    console.log("Component is unmounting...")
  }

  //to save state to local storage
  componentRefresh() {
    console.log("componentRefresh function working")
    var data = this.state.examId;
    localStorage.setItem('exam_id', data);
  }

  // after render this function is called automatically. 
  componentDidMount() {
    //this will be always ready for page refresh event.
    window.addEventListener('beforeunload', this.componentRefresh);
  }



  render() {
    if (this.state.testData === "" || this.state.testData === undefined || this.state.testData === null) {
      console.log("Test Data is Empty")
      return false;
    } console.log("Test Data Recieved")
    console.log(this.state.testData.test);
    return <div>
      <main id="main">
        <h4>{this.state.examName} Tests Series</h4>
        <p>

          {<ul>{this.state.testData.test.map((item, index) => (
            <li key={index}>
            noq = {item.noq}&nbsp;&nbsp;
            negt_mark = {item.negt_mark}&nbsp;&nbsp;
            timeof_test = {item.timeof_test}&nbsp;&nbsp;
            auth_id = {item.auth_id}&nbsp;&nbsp;
            attempts = {item.attempts}&nbsp;&nbsp;
            </li>
          ))}</ul>}
        </p>

      </main>

      <Link to="/AddNewTest" ><button>Add New Test</button></Link>

    </div>;
  }
}

export default TestName;