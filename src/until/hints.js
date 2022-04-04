export const id = 'Идентификатор/номер заказа<br><span class="text-tooltip">Используется для поиска и передачи заказа между пользователями CRM</span>';
export const status = 'Текущий статус заказа<br><span class="text-tooltip">Используется для контроля, анализа и отслеживания заказа в CRM</span>';
export const attribute = 'Атрибут статуса заказа<br><span class="text-tooltip">Используется для контроля, анализа и отслеживания уникальных признаков статуса</span>';
export const pokupatel = 'Фамилия имя отчество покупателя<br><span class="text-tooltip">Используется для автоматического заполнения товарно-транспортной накладной почтовой службы</span>';
export const country = 'Страна за которой закреплён заказ<br><span class="text-tooltip">Используется для разделения заказов из разных стран</span>';
export const tel = 'Телефон покупателя<br><span class="text-tooltip">Используется для:<br>-Автоматического заполнения товарно-транспортной накладной почтовой службы<br>-Автоматической отправки SMS</span>';
export const comm = '...';
export const sum = 'Итоговая сумма заказа';
export const product = 'Товар участвующий в заказе';
export const pay = 'Используемый вид оплаты';
export const delivery = 'Используемый вид доставки';
// export const prro = 'Программный реестр расчётных операций<br><span class="text-tooltip">В разработке</span>';
export const addres = 'Адрес доставки';
export const ttn = 'Номер товарно-транспортной накладной';
export const ttnStatus = 'Информация за последний час о статусе посылки<br><span class="text-tooltip">Используется для:<br>-автоматической отправки SMS<br>-автоматической смены статусов в CRM</span>';
export const prinyal = 'Пользователь подтвердивший заказ<br><span class="text-tooltip">Закрепление происходит автоматически при изменении статуса заказа на «Принят». Используется для расчета зарплаты/премии сотрудника</span>';
export const depart = 'Используемый отдел в заказе<br><span class="text-tooltip">Заказ с "отделом" виден только тем пользователям у которых есть доступ к сооответствующему отделу</span>';
export const add = 'Дата и время добавления заказа в CRM';
export const open = 'Время между добавлением заказа в CRM и первым взаимодействием с ним<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал звонка/ответа</span>';
export const opened = 'Последний пользователь открывший заказ<br><span class="text-tooltip">Используется для выявления сотрудников "ворующих" заказы</span>';
export const prinyatZa = 'Время между открытием заказа и изменением его статуса на «Принят»<br><span class="text-tooltip">Используется для оценки времени потраченого на подтверждение заказа</span>';
export const accepted = 'Дата и время изменения статуса заказа на «Принят»<br><span class="text-tooltip">Используется для расчета зарплаты/премии сотрудника за период врмени</span>';
export const otpravka = 'Время между изменением статуса заказа на "Принят" и получением посылки почтовой службой<br><span class="text-tooltip">Показывает сколько времени покупатель ожидал отправку заказа</span>';
export const send = 'Дата и время получения посылки почтовой службой<br><span class="text-tooltip">Используется для контроля сотрудников отвечающих за отправку заказа</span>';
export const change = 'Дата и время последнего изменения заказа';
export const changed = 'Последний пользователь изменивший заказ';
export const finish = 'Дата и время завершения заказа<br><span class="text-tooltip">Используется для подтверждения завершения заказа. Пользователь с правом использования кнопки «Завершить», блокирует ею заказ. Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
export const site = 'Источник заказа';
export const whosend = 'Пользователь отправивший заказ<br><span class="text-tooltip">Автоматически закрепляется последний сотрудник редактировавший заказ, перед подтверждением получения посылки почтовой службой.<br> Используется для расчёта заплаты/премии сотрудника</span>';
export const ip = 'IP адрес, страна, тип устройства, ОС и браузер с которого поступил заказ<br><span class="text-tooltip">Используется для:<br>-Анализа маркетологами<br>-Блокировки IP в случае спама</span>';
export const utm = (type) => { return `UTM-метка:  ${type}<br><span class="text-tooltip">Используется для передачи переменных рекламного источника с которого поступил заказ</span>` };
export const field = 'Дополнительное поле заказа<br><span class="text-tooltip">Используется для передачи и хранения дополнительных параметров заказа</span>';

export let prro = 'Программный регистратор расчётных операций<br><span class="text-tooltip">Используется для фиксации прихода денежных средств от продажи товаров за наличный или безналичный расчет.<br> Данные о чеках передаются сразу в ГНС Украины.</span>';

export const ukrPochta = 'Укрпочта';
export const nv = 'Новая почта';
export const samovivoz = 'Самовывоз';
export const justin = 'Justin';

export const predoplata = 'Предоплата';
export const nalozhplatezh = 'Наложенный платёж';
export const acceptPay = 'Оплачен';
export const decline = 'Отказ';
export const trade = 'Обмен';


export const sms = 'Электронный чек отправлен по SMS';
export const mail = 'Электронный чек отправлен на почту';
export const smsCurrent = 'Отправлено ' + 1 + ' сообщения';
export const lastDay = 'Остался 1 день до платного хранения';

export const desktop = 'Компьютер';
export const windows = 'Windows';
export const chrome = 'Chrome';
export const ua = 'Украина';
export const mobile = 'Смартфон';
export const tablet = 'Планшет';
export const android = 'Android';
export const emailBrowser = 'Mail браузер';

export const ru = 'Россия';
export const safari = 'Safari';
export const unknown = 'Неопределено';
export const iOS = 'iOS';
export const firefox = 'Firefox';
export const alb = 'Албания';
export const opera = 'Opera';
export const edge = 'Edge';
export const yandex = 'Yandex Браузер';

export const vodofone = 'Vodafone';
export const kyivstar = 'Киевстар';
export const lifecell = 'Lifecell';
export const incorrectNumber = 'Неверный номер';
export const unknownNumber = 'Неизвестный номер';


export const allOrder = 'Все заказы в CRM';
export const backOrderPoluchen = 'Возвращенный заказ получил отправитель<br><span class="text-tooltip">Ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
export const backOrderPribil = 'Возвращенный заказ прибыл на почту<br><span class="text-tooltip">Ожидает получения отправителем<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
export const newOrder = 'Заказ без статуса<br><span class="text-tooltip">Ожидает обработку</span>';
export const acceptOrder = 'Покупатель подтвердил заказ<br><span class="text-tooltip">Ожидает упаковку или передачу в «(Drop) Ожидает ТТН»<br><br>В статусе включена автоматическая отправка SMS согласно настроек модуля. Используемый шаблон:<br>- «Заказ принят, готовится к отправке»</span>';
export const declineOrder = 'Покупатель отказался от заказа';
export const finishOrder = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение наложенного платежа;<br>- выполнение заказа.<br>Присвоил заказу статус «Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
export const upakovanOrder = 'Заказ упакован<br><span class="text-tooltip">Ожидает передачу почтовой службе</span>';
export const peredanOrder = 'Заказ передан почтовой службе<br><span class="text-tooltip">Ожидает автоматического присвоения статуса «Отправлен», после подтверждения получения посылки почтовой службой</span>';
export const sendOrder = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включен автоматический возврат заказа, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
export const backOrderWarehouse = 'Возврат учтён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить» подтвердил получение возвращенного заказа. Присвоил заказу статус «Возврат (завершён)», заблокировал заказ кнопкой «Завершить».<br> Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
export const vikuplenOrder = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает получения наложенного платежа<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
export const moneyGrab = 'Наложенный платёж получен<br><span class="text-tooltip">Заказ ожидает завершения<br><br>Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
export const backOrder = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
export const dropWaitTtn = 'Заказ передан Dropshipping компании<br><span class="text-tooltip">Ожидает создания товарно-транспортной накладной дропшиппером, для её присвоения заказу с дальнейшим отслеживания в CRM системе</span>';
export const dropAssignedTtn = 'Заказу присвоена ТТН<br><span class="text-tooltip">Ожидает автоматического присвоения статуса «(Drop) Отправлен», после подтверждения получения посылки почтовой службой</span>';
export const dropSend = 'Почтовая служба получила посылку<br><span class="text-tooltip">Статус присваивается автоматически согласно настроек модуя:<br>- Новая почта<br>- Укрпочта<br>- Justin<br><br>В статусе включена автоматическая отправка SMS, согласно настроек модуля. Используемый шаблон:<br>- «Заказ отправлен»<br>- «Заказ прибыл»<br>- «Заказ 3-й день в отделении»<br>- «Последний день хранения»</span>';
export const dropBuying = 'Заказ выкуплен<br><span class="text-tooltip">Ожидает выплату от дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span>';
export const dropFinish = 'Заказ завершён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил:<br>- получение выплаты от дропшиппера;<br>- выполнение заказа.<br>Присвоил заказу статус «(Drop) Завершён», заблокировал заказ кнопкой «Завершить».<br>Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';
export const dropBack = 'Покупатель отказался от получения заказа<br><span class="text-tooltip">Ожидает вычитания стоимости за возврат заказа из выплат дропшиппера<br><br>Статус присваивается автоматически, согласно настроек модуля:<br>- Новая почта<br>- Укрпочта<br>- Justin</span></span>';
export const dropBackFinish = 'Возврат учтён<br><span class="text-tooltip">Пользователь с правом использования кнопки «Завершить», подтвердил вычитание стоимости за возврат заказ, из выплат дропшиппера. Присвоил заказу статус «(Drop) Возврат (завершён)», заблокировал заказ кнопкой «Завершить». Дальнейшее редактирование заказа сотрудниками без снятия блокировки, невозможно</span>';


export const zoomPlus = 'Увеличить масштаб';
export const zoomMinus = 'Уменьшить масштаб';

export const refresh = 'Сбросить все фильтры';
export const settings = 'Дополнения и расширения';
export const submit = 'Импорт экспорт данных';
export const addOrder = 'Создать заказ';
export const notification = 'Уведомления';


export const pP = 'Пустое поле';
export const inputDataMin = 'Искать значения от:';
export const inputDataMax = 'Искать значения до:';

export const createTtn = 'Массовое создание ттн нп с разными местами и объемом при отправке, менеджеры только город указывают';
export const avtoobzvon = 'Автоматический обзвон выделенных заказов';
export const changeComm = 'Позволяет массово редактировать коментарий в выделеных заказах';
export const sendSMS = 'Массовая отправка SMS выделенным заказам';
export const copy = 'Копировать выделенный заказ';
export const delet = 'Удалить выделенные заказы';
export const changeStatus = 'Массовая смена статуса в выделенных заказах';
export const backOrderSelect = 'Принудительный возврат выделенных заказов отправителю';

export const exportDrop = 'Используется для массовой выгрузки и передачи заказов дропшипперу';
export const importDrop = 'Файл отправленный через «Экспорт заказов для Dropshipping» возвращается дропшиппером с заполненными номерами товарно-транспортных накладных для массового присвоения ТТН и дальнейшего отслеживания заказов в вашей CRM';
export const importExcel = 'Используется для загрузки «холодных» баз и другого';



export const ukraine = 'Украина';
export const russia = 'Россия';
export const kazahstan = 'Казахстан';
export const world = 'Мир';
