import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Writer from './Writer'

export default ({ match: { url }, writers }) =>
  <Fragment>
    <ul>
      {writers.map(({ id, name }) =>
        <li key={id}>
          <Link to={`${url}/${id}`}>{name}</Link>
        </li>
      )}
    </ul>
      
    <Route exact path={url} render={
      () => <h3>Please select a writer from above.</h3>
    }/>
    <Route path={`${url}/:writerId`} render={      
      props => {
        const writer = writers.find(({ id }) => id === props.match.params.writerId)

        if (!writer) {
          return <NotFound />
        }

        return <Writer {...props} {...writer}/>
      }
    } />
  </Fragment>