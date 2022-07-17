export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Tutoring</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}<a href={"https://docs.google.com/forms/d/e/1FAIpQLSeJXLZeTJRzlADolIgGJaalpgIavN-dfVrSOoW-_kchG8lxRQ/viewform?usp=sf_link"}>here</a> and if you want to tutor someone please submit <a href={"https://docs.google.com/forms/d/e/1FAIpQLScZPzaC5WnOxjeEdzXrV_q74YZx3imGvZr66lLiFqyaMiPrlw/viewform?usp=sf_link"}>this</a>.</p>
              <h3>Subjects We Help With:</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}