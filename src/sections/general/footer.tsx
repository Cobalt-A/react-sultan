import React from 'react';
import MobileFooter from '../../components/general/mobileFooter';
import DesctopFooter from '../../components/general/desctopFooter';

function Footer() {
	return (
		<footer data-testid="footer" id='footer'>

			<DesctopFooter />

			<MobileFooter />

		</footer>
	);
}

export default Footer;