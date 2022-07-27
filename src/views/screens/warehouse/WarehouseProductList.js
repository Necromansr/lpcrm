import React from 'react';
import StatusBlock from './statusBlock';
import PlusMinusBlock from './PlusMinusBlock';
let tooltip;
let plusminus;
const WarehouseProductList = ({
	objProduct,
	setSwitchMenu,
	index,
	setObjProduct,
	podlozhka,
	setPodlozhka,
	lastIndex,
	setLastIndex,
	loadedLabelBlock,
	flagSwitchMenu,
	translator,
	setToggleCard,
	setGetIndex,
	hideMenu,
	setHideMenu
}) => {
	function switchBtn(e) {
		e.stopPropagation();
		if (e.target.className === 'status-all') {
			let newobj = [...objProduct];
			newobj[index].status.all = !newobj[index].status.all;
			if (newobj[index].status.all === false) {
				newobj[index].status.rozetka = false;
				newobj[index].status.prom = false;
				newobj[index].status.crm = false;
			} else {
				newobj[index].status.rozetka = true;
				newobj[index].status.prom = true;
				newobj[index].status.crm = true;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-rozetka') {
			let newobj = [...objProduct];
			newobj[index].status.rozetka = !newobj[index].status.rozetka;
			if (newobj[index].status.rozetka === true) {
				newobj[index].status.all = true;
			}
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-prom') {
			let newobj = [...objProduct];
			newobj[index].status.prom = !newobj[index].status.prom;
			if (newobj[index].status.prom === true) {
				newobj[index].status.all = true;
			}
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
		if (e.target.className === 'status-crm') {
			let newobj = [...objProduct];
			newobj[index].status.crm = !newobj[index].status.crm;
			if (newobj[index].status.crm === true) {
				newobj[index].status.all = true;
			}
			if (
				newobj[index].status.rozetka === false &&
				newobj[index].status.prom === false &&
				newobj[index].status.crm === false
			) {
				newobj[index].status.all = false;
			}
			setObjProduct(newobj);
		}
	}
	function tooltipOn(e, html) {
		let posElement = e.currentTarget.getBoundingClientRect();
		const tooltipBlock = document.getElementById('tooltipBtn');
		tooltipBlock.style.fontSize = '12px';
		if (e.currentTarget.scrollWidth > e.currentTarget.offsetWidth) {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		} else {
			if (e.currentTarget.className === 'attribute-width') {
				const src = e.currentTarget.children[0].getAttribute('src');
				const memory = e.currentTarget.children[1].innerText;
				const img = `<img style='width:100%;height:100%;object-fit:cover;padding-bottom:3px' src="${src}"/>`;
				const heightPlus = posElement.y + tooltipBlock.offsetHeight;
				const viewportHeight = document.body.clientHeight;
				tooltip = setTimeout(() => {
					if (heightPlus > viewportHeight) {
						tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column-reverse;width:300px;height:300px'>${memory}${img}</div>`;
						tooltipBlock.style.left = posElement.x + 'px';
						tooltipBlock.style.top = posElement.y - tooltipBlock.offsetHeight - 5 + 'px';
					} else {
						tooltipBlock.innerHTML = `<div class="img-tooltip" style='display: flex; flex-direction: column;width:300px;height:300px'>${memory}${img}</div>`;
						tooltipBlock.style.left = posElement.x + 'px';
						tooltipBlock.style.top = posElement.y + 23 + 'px';
					}
					tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
				}, 250);
			}
		}
		if (e.currentTarget.innerText === '🇺🇦') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'ukraine');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '🇷🇺') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'russia');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '🇹🇷') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCountries', 'turkey');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}

		if (e.currentTarget.innerText === '€') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'eur');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '₽') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'rub');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '₴') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'uah');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.innerText === '$') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipCurrency', 'dollar');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'slider round') {
			tooltip = setTimeout(() => {
				if (e.target.offsetParent.children[0].checked) {
					tooltipBlock.innerText = html;
				} else {
					tooltipBlock.innerText = html;
				}
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);


		}
		if (e.currentTarget.className === 'wrap-nal-ostatok') {
			const childInput = e.currentTarget.children[1].value;
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-available') + childInput;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-rezerv') {
			const memoryInput = e.currentTarget.closest('tr').querySelector('.wrap-nal-ostatok').children[1].value;
			let res = +e.target.innerText.replace(/\s/gu, '') === +memoryInput.replace(/\s/gu, '') ? '' : +e.target.innerText.replace(/\s/gu, '') - +memoryInput.replace(/\s/gu, '');
			let newres = res.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0, });
			tooltip = setTimeout(() => {
				tooltipBlock.innerHTML = translator.getTranslation('tooltipWarehouse', 'sum-reserv') + e.target.innerText + (res === '' ? '' : `<br>Недостаёт по выбранным фильтрам: : ${newres}`);
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-otpr') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-send') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'nal-vozvrat') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-crib') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma1') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-available') + e.target.innerText.replace('/', '');
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma2') {
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-reserv') + e.target.innerText;
				tooltipBlock.style.left = posElement.x + 'px';
				tooltipBlock.style.top = posElement.y + 23 + 'px';
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma3') {
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-send') + e.target.innerText;
				if (widthPlus > viewportWidth) {
					tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				} else {
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				}
				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
		if (e.currentTarget.className === 'summa-suma4') {
			const widthPlus = posElement.x + tooltipBlock.offsetWidth;
			const viewportWidth = document.body.clientWidth;
			tooltip = setTimeout(() => {
				tooltipBlock.innerText = translator.getTranslation('tooltipWarehouse', 'sum-crib') + e.target.innerText;
				if (widthPlus > viewportWidth) {
					tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				} else {
					tooltipBlock.style.left = posElement.x + 'px';
					tooltipBlock.style.top = posElement.y + 23 + 'px';
				}

				tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
			}, 250);
		}
	}
	function tooltipOff() {
		clearTimeout(tooltip);
		document.getElementById('tooltipBtn').style.animation = '';
	}
	function clickTr(e) {
		if (e.currentTarget && !objProduct[index].lock) {
			let newobj = [...objProduct];
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj[index].select = !newobj[index].select;
			} else if (e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				newobj = newobj.map((x) => {
					return { ...x, select: false };
				});
				if (lastIndex < index) {
					newobj.slice(lastIndex, index + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				} else {
					newobj.slice(index, lastIndex + 1).map((x, i) => {
						if (x.lock) {
							x.select = false;
						} else {
							x.select = true;
						}
					});
				}
			} else {
				setLastIndex(index);
				e.stopPropagation();
				newobj.map((x, i) => {
					if (i !== index) {
						x.select = false;
					}
				});
				newobj[index].select = !newobj[index].select;
			}
			setObjProduct(newobj);
		}
	}
	function dblClick(e) {
		if (
			e.target.localName === 'button' ||
			e.target.offsetParent === 'label' ||
			e.target.className === '.slider.round'
		) {
		} else {
			setToggleCard(true);
			setGetIndex(index);
		}
	}
	return (
		<>
			{objProduct[index] && (
				<tr
					className={
						objProduct[index].select
							? 'select speed'
							: objProduct[index].lock
								? 'lockOrder speed'
								: 'speed'
					}
					onClick={clickTr}
					onMouseEnter={objProduct[index].lock ? (e) => {

						let posElement = e.target.getBoundingClientRect();
						const tooltipBlock = document.getElementById('tooltipBtn');
						tooltipBlock.style.fontSize = '12px';
						const widthPlus = e.pageX + tooltipBlock.offsetWidth;
						const viewportWidth = document.body.clientWidth;
						plusminus = setTimeout(() => {
							const name = 'Олександр';
							tooltipBlock.innerText = translator.getTranslation('lockOrder', 'lock') + ' ' + name;
							if (widthPlus > viewportWidth) {
								tooltipBlock.style.left = posElement.x + e.target.offsetWidth - tooltipBlock.offsetWidth + 'px';
								tooltipBlock.style.top = posElement.y + 23 + 'px';
							} else {
								tooltipBlock.style.left = posElement.x + 'px';
								tooltipBlock.style.top = posElement.y + 23 + 'px';
							}
							tooltipBlock.style.animation = 'delay-btn 0.5s forwards';
						}, 250);
					} : () => { }}
					onMouseLeave={objProduct[index].lock ? (e) => {
						clearTimeout(plusminus);
						document.getElementById('tooltipBtn').style.animation = '';
					} : () => { }}
					onDoubleClick={!objProduct[index].lock ? dblClick : () => { }}
					key={index}
				>
					<td className="sticky-body">
						<div className="sticky-block">
							<div className="stickyBeforeBody"></div>
							<div
								onMouseEnter={() => { setSwitchMenu(true) }}
								onMouseLeave={() => setSwitchMenu(flagSwitchMenu ? true : false)}
								style={{ display: 'flex', alignItems: 'center' }}
							>
								<div
									style={{
										minWidth: '51px',
										paddingRight: '10px',
										height: '18px',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<label className="switch-btn-warehouse" >
										<input
											type="checkbox"
											className="status-all"
											onChange={objProduct[index].lock ? () => { } : switchBtn}
											checked={objProduct[index].status.all}
										/>
										<span className="slider round" onMouseEnter={objProduct[index].lock ? () => { } : (e) => {
											tooltipOn(
												e,
												e.target.offsetParent.children[0].checked
													? 'Заблокировать товар'
													: 'Разблокировать товар'
											);
										}} onMouseLeave={tooltipOff} onClick={objProduct[index].lock ? () => { } : (e) => {
											tooltipOn(
												e,
												e.target.offsetParent.children[0].checked
													? 'Заблокирован'
													: 'Разблокирован'
											);
									
										}} onDoubleClick={e => e.stopPropagation()}></span>
									</label>
								</div>
								<div
									className="animationFrame"
									style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
								>
									{loadedLabelBlock && <StatusBlock switchBtn={switchBtn} objProduct={objProduct} setObjProduct={setObjProduct} tooltipOn={tooltipOn} tooltipOff={tooltipOff} index={index} />}
								</div>
							</div>

							<div
								className="id-width"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={
									!objProduct[index].status.all
										? {
											color: 'rgba(0,0,0,0.4)',
											textAlign: 'left',
											paddingRight: '10px',
										}
										: { textAlign: 'left', paddingRight: '10px' }
								}
							>
								{objProduct[index].id}
							</div>
							<div
								className="flags"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={{ opacity: `${!objProduct[index].status.all ? 0.4 : ''}` }}
							>
								{objProduct[index].country}
							</div>
							<div
								className="currency"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={{
									color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
								}}
							>
								{objProduct[index].currency}
							</div>
							<div
								className="name-width"
								style={{
									overflow: 'hidden',
									paddingRight: '15px',
									width: 200,
								}}
							>
								{objProduct[index].podProduct === 1 || objProduct[index].podProduct === 0 ? (
									<span
										className={
											objProduct[index].podProduct === 0
												? 'arrow'
												: objProduct[index].podProduct === 1
													? 'arrowDeg'
													: ''
										}
										style={
											objProduct[index].podProduct === 1 ||
												(objProduct[index].podProduct === 0 && objProduct[index].lock) || !objProduct[index].status.all
												? { opacity: 0.4 }
												: {}
										}
									></span>
								) : (
									''
								)}
								<span
									className="name"
									onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
									onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
									style={{
										opacity: `${objProduct[index].podProduct === 1 || !objProduct[index].status.all ? 0.4 : ''
											}`,
										fontSize: `${objProduct[index].podProduct === 1 ? '10px' : ''}`,
									}}
								>
									{objProduct[index].name}
								</span>
							</div>
							<div
								className="attribute-width"
								onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
								onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
								style={{
									opacity: `${!objProduct[index].status.all ? 0.4 : ''}`,
									display: 'flex',
									alignItems: 'center',
									width: 150,
								}}
							>
								<img
									style={{ width: 16, height: 16, position: 'absolute' }}
									src={objProduct[index].images}
									alt=""
								/>
								<span className="attribute">
									{objProduct[index].attribute}
								</span>
							</div>
							<div className="shadow-left"></div>
						</div>
					</td>
						<PlusMinusBlock
							translator={translator}
							objProduct={objProduct}
							setObjProduct={setObjProduct}
							setSwitchMenu={setSwitchMenu}
							podlozhka={podlozhka}
							setPodlozhka={setPodlozhka}
							hideMenu={hideMenu}
							setHideMenu={setHideMenu}
							index={index}
							tooltipOn={tooltipOn}
							tooltipOff={tooltipOff}
						/>
					<td
						className="nal-rezerv"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{objProduct[index].rezerv}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="nal-otpr"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{objProduct[index].otpr}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="nal-vozvrat"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '10px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{objProduct[index].vozvrat}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="nal-zakupka"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					>
						{objProduct[index].zakupka}
					</td>
					<td
						className="nal-prodazha"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					>
						{objProduct[index].prodazha}
					</td>
					<td
						className="nal-marzha"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
						}}
					>
						{objProduct[index].marzha}
					</td>
					<td
						className="summa-suma1"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : ''}`,
							textAlign: 'right',
							display: 'flex',
							justifyContent: 'end',
							paddingRight: '3px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{objProduct[index].suma1}
						<span style={{ paddingLeft: 3, color: 'rgba(0,0,0,0.5)', pointerEvents: 'none' }}>/</span>
					</td>
					<td
						className="summa-suma2"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{objProduct[index].suma2}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="summa-suma3"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
							paddingRight: '4px',
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{objProduct[index].suma3}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
					<td
						className="summa-suma4"
						style={{
							color: `${!objProduct[index].status.all ? 'rgba(0,0,0,0.4)' : 'rgba(0, 0, 0, 0.5)'}`,
						}}
						onMouseEnter={objProduct[index].lock ? () => { } : tooltipOn}
						onMouseLeave={objProduct[index].lock ? () => { } : tooltipOff}
					>
						{objProduct[index].suma4}
						<span style={{ opacity: `${!objProduct[index].status.all || objProduct[index].lock ? '0.4' : ''}`, pointerEvents: 'none' }}></span>
					</td>
				</tr>
			)}
		</>
	);
};

export default WarehouseProductList;
