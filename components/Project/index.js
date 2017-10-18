import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import MediaAsset from '../MediaAsset';

import ProjectBody from './ProjectBody';
import ProjectHeader from './ProjectHeader';
import ProjectTitle from './ProjectTitle';
import ProjectLinksList from './ProjectLinksList';
import ProjectDetailsTitle from './ProjectDetailsTitle';
import ProjectDetailsBody from './ProjectDetailsBody';

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Project = (props) => (
  <Article>
    <MediaAsset imageSource={props.thumbnailUrl} isOdd={props.isOdd}/>
    <ProjectBody>
      <div>
        <ProjectHeader>
          <ProjectTitle>{props.title}</ProjectTitle>
          <ProjectLinksList links={props.links}/>
        </ProjectHeader>
        <ProjectDetailsTitle><strong>{props.detailsTitle}</strong></ProjectDetailsTitle>
      </div>
      <ProjectDetailsBody>{props.detailsBodyText}</ProjectDetailsBody>
    </ProjectBody>
    <ReactTooltip />
  </Article>
);

Project.propTypes = {
  detailsTitle: PropTypes.string,
  detailsBodyText: PropTypes.string,
  isOdd: PropTypes.bool,
  links: PropTypes.array,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
};

Project.defaultProps = {
  title: 'New Project',
};

export default Project;
