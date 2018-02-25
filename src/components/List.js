import React from 'react';

const styles = {
	bold: {
		fontWeight: 'bold'
	}
};

const create_li_element = (text, key, url) => {
	if (url)
		return (<li key={key}><a target="_blank" href={url}>{text}</a></li>)
	else 
		return (<li key={key}>{text}</li>)
};

const create_oneField_elements = (isArray, data_array, data, valueKey, valueKey2) => {
	if (isArray){
		return (<ul>
					{ (data_array || []).slice(0,5).map((item, i) => {
						const text = (valueKey2) ? `${item[valueKey]} - ${item[valueKey2]}` : item[valueKey];
						return create_li_element(text, i, item.url);
					}) }
				</ul>);
	} else {
		return (<ul>
					{ data_array.array.map(key => {
						create_li_element(data[key], key, data[key].url);
					}) }
				</ul>);
	}
};

const create_multipleFields_elements = (data_array, data) => {
	if (Array.isArray(data)) return ''; // can only be passed an object as data
	return (
		<div>
			{ (data_array || []).map(key => {
				if (!data[key]) return ''; // don't show empty properties
				return (<div key={key}>
							<h3 style={styles.bold}>{key}</h3>
							<p>{data[key]}</p>
						</div>);
			}) }
		</div>
	);
}

const List = (props) => {
	const { title, data, isArray, oneField, valueKey, valueKey2 } = props;
	const data_array = (isArray) ? data : Object.keys(data);

	return (
		<div>
			{ (oneField) ? 
				<div>
					<h3 style={styles.bold}>{title}</h3>
					{ create_oneField_elements(isArray, data_array, data, valueKey, valueKey2) }
				</div>
			: 
				<div>
					{ create_multipleFields_elements(data_array, data) }
				</div>
			}
		</div>
	);
}

export default List;