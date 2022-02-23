import React from 'react';
import PropTypes from 'prop-types';
import PracticeAreaItem from './PracticeAreaItem';

const PracticeAreaGroup = ({ group, items }) => {
    return (
        <div>
            <hr/>
            <h3>{group}</h3>

            <div className='row row-60 justify-content-sm-center row-xl offset-top-80 offset-xl-top-95'>
                {items.map((item, idx) => <PracticeAreaItem key={idx} item={item}/>)}
            </div>
        </div>
    );
};

PracticeAreaGroup.displayName = 'Practice Area Group';
PracticeAreaGroup.propTypes = {
    posts: PropTypes.array,
};

export default PracticeAreaGroup;
