import React from 'react';
import {Link} from '@reach/router';

import {StyledNavigation} from '../styles/StyledNavigation';

const Navigation = ({movie}) => (
    <StyledNavigation>
        <div className="navigation-content">
            <Link to="/">
                <p>Anasayfa</p>
            </Link>
            <p>|</p>
            <p>{movie}</p>
        </div>
    </StyledNavigation>
)

export default Navigation;