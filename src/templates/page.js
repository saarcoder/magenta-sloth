import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="page py-5 py-sm-6">
            	<div className="container container--medium">
            		<header className="page__header">
            			<h1 className="page__title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
            		</header>
            		<div className="page__body text-block">
            			{htmlToReact(_.get(this.props, 'pageContext.html', null))}
            		</div>
            	</div>
            </article>
            </Layout>
            <iframe src="https://www.mcc-berlin.net/fileadmin/data/clock/carbon_clock.htm?i=3267263" style="width:600px; height:340px;"></iframe>
        );
    }
}
