import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 3:45PM" 
                    content="Nice blog post!" 
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                        author="Alex"  
                        timeAgo="Today at 2:00PM" 
                        content="I like reading." 
                        avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                        author="Jane" 
                        timeAgo="Yesterday at 1:05AM" 
                        content="I am learning React." 
                        avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))