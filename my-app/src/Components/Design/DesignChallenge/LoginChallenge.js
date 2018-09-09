import React, { Fragment } from 'react';

const style = {
    sectionMargin : {
        margin: '50px'
    },
    sectionMargin2 : {
        paddingTop: '40px',
        margin: '50px'
    },
    mediumForm : {
        marginRight: '10px',
        height: '20px',
        fontSize: '13px'
    },
    lgForm : {
        margin: '5px',
        height: '20px',
        width: '200px',
        fontSize: '14px'
    },
    btnMed : {
        fontSize: '13px',
        height: '26px'
    },
    btnLg : {
        fontSize: '14px',
        height: '29px',
        margin: '10px 5px',
        width: '80px',
        backgroundColor: '#2589dc',
        color: '#fff',
        border: 'none'
    }
};

export default () => {
    return (
        <Fragment>
            <b>Login Challenge</b>
            <p>A take on a simple Login form that can be so easily missed by developers.
                This project shows how a simple login form can be improved through a thoughtful process
                of giving it the right margin, proper context, more visual cues and overall more information.
                This design challenge shows how adding these details can immensely improve
                its visual design and overall experience for a user/customer/client.
            </p>
          <section style={style.sectionMargin}>
              <label>Username</label><input type="text"/>
              <label>Password</label><input type="text"/>
              <button>Login</button>
          </section>
          <section style={style.sectionMargin}>
              <input type="text" placeholder="Username" style={style.mediumForm}/>
              <input type="text" placeholder="Password" style={style.mediumForm}/>
              <button style={style.btnMed}>Login</button>
          </section>
          <section style={style.sectionMargin2}>
              <h2>Welcome Back!</h2>
              <p style={{color: '#6e6e6e'}}>Please sign in to use our online banking services.</p>
              <input type="text" placeholder="Username" style={style.lgForm}/><br/>
              <input type="text" placeholder="Password" style={style.lgForm}/><br/>
              <div>
                  <button style={style.btnLg}>Sign In</button> <a style={{color: '#1b64a1'}}>Reset</a>
              </div>
          </section>
        </Fragment>
    )
}