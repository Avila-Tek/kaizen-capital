import React from 'react';

function IconComponent({ icon, ...props }) {
	const renderIcon = () => require(`./${icon}`).default;
	const Icon = renderIcon();
	return <Icon {...props} />;
}

export default IconComponent;
