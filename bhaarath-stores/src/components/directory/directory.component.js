import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import './../directory/directory.styles.scss';
import MenuItem from './../menu-items/menu-item.component';
// when there is no need of state where state is put up in redux we can put functional component
const Directory = ({ sections }) => (
      <div className = "directory-menu">
        {
          sections.map(({ id, ...otherSectionsProps}) => (
          <MenuItem key = {id} {...otherSectionsProps}/>
           ))
          // here ...otherSectionprops means other properties of section it is used because for the easy use
          // this can be used [...otherSectionsProps] where means if title = {title} size = {size} imageUrl = {imageUrl} at that time these can be used
        }
      </div>
)

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);