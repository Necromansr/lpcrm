import React from 'react';

const StatusBlock = ({ objProduct, index, setObjProduct, tooltipOn, tooltipOff ,switchBtn}) => {

	return (
		<>
			<label
				style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
				className="switch-btn-small"
			>
				<input
					type="checkbox"
					className="status-crm"
					onChange={objProduct[index].lock ? () => {} : switchBtn}
					// defaultChecked={objProduct[index].status.crm}
					checked={objProduct[index].status.crm}
				/>
				<span className="slider round" onMouseEnter={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокировать товар'
							: 'Разблокировать товар'
					);
				}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокирован'
							: 'Разблокирован'
					);
				}} onDoubleClick={e => e.stopPropagation()}></span>
			</label>

			<label
				style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
				className="switch-btn-small"
			>
				<input
					type="checkbox"
					className="status-rozetka"
					onChange={objProduct[index].lock ? () => { } : switchBtn}
					// defaultChecked={objProduct[index].status.rozetka}
					checked={objProduct[index].status.rozetka}
				/>
				<span className="slider round" onMouseEnter={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокировать товар'
							: 'Разблокировать товар'
					);
				}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокирован'
							: 'Разблокирован'
					);
				}} onDoubleClick={e => e.stopPropagation()}></span>
			</label>

			<label
				style={!objProduct[index].status.all ? { opacity: 0.4 } : {}}
				className="switch-btn-small"
			>
				<input
					type="checkbox"
					className="status-prom"
					onChange={objProduct[index].lock ? () => {} : switchBtn}
					// defaultChecked={objProduct[index].status.prom}
					checked={objProduct[index].status.prom}
				/>
				<span className="slider round" onMouseEnter={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокировать товар'
							: 'Разблокировать товар'
					);
				}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? null : (e) => {
					tooltipOn(
						e,
						e.target.offsetParent.children[0].checked
							? 'Заблокирован'
							: 'Разблокирован'
					);
				}} onDoubleClick={e => e.stopPropagation()}></span>
			</label>
			<div className="gradi"></div>
		</>
	);
};

export default StatusBlock;
