import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import {Provider} from 'react-redux';



import App from './App';


//mongo "mongodb+srv://cluster0.xt9zo.mongodb.net/mppsc_db" --username techmevlus
ReactDOM.render( 
  	<Router>
  		<div> 
  			<Route exact path="/quiz.html" render={props => 
            <Quiz url='http://localhost:3001/api/questions' {...props} />
        }/>
            <Route exact path="/portfolio.html" render={props => 
            <AvailableTestArea url='http://localhost:3001/api/questions' {...props} />
        }/>
          <Route exact path="/availabletest.html" render={props => 
            <AvailableTestSeries url='http://localhost:3001/api/questions' {...props} />
        }/>
         <Route exact path="/about.html" render={props => 
            <AboutUs url='http://localhost:3001/api/questions' {...props} />
        }/>
                <Route exact path="/services.html" render={props => 
            <VideoLecture url='http://localhost:3001/api/questions' {...props} />
        }/>
         <Route exact path="/team.html" render={props => 
            <OurTeam url='http://localhost:3001/api/questions' {...props} />
        }/>
         <Route exact path="/pricing.html" render={props => 
            <Pricing url='http://localhost:3001/api/questions' {...props} />
        }/>
        <Route exact path="/contact.html" render={props => 
            <ContactUs  {...props} />
        }/>
         <Route exact path="/blog-single.html" render={props => 
            <BlogSingle url='http://localhost:3001/api/questions' {...props} />
        }/>
        <Route exact path="/blog.html" render={props => 
            <Blog url='http://localhost:3001/api/questions' {...props} />
        }/>
        <Route exact path="/addQuestion" render={props => 
            <QuestionForm url='http://localhost:3001/api/questions'/>
        }/>
        <Route exact path="/questionAdded" render={props => 
            <QuestionAdded />
        }/>
        <Route exact path="/author-exam" render={props => 
            <AuthorExam        {...props}   />
        }/>
        <Route exact path="/exams_name" render={props => 
            <ExamName url='http://localhost:3001/api/exams_name' {...props} />
        }/>
        <Route exact path="/testDetails" render={props => 
            <TestName url='http://localhost:3001/api/testDetails' {...props} />
        }/>
        <Route exact path="/test" render={props => 
            <Test url='http://localhost:3001/api/test' {...props} />
        }/>
        

        <Route exact path="/answer-key" render={props => 
            <App url='http://localhost:3001/api/' {...props} />
        }/>
                
  		</div>
  	</Router>,
	document.getElementById('root')	
);




