import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Ukraine } from '../../../until/images';
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
// import Zakazy from "./zakazy";
import * as DTD from 'react-draggable';
// import _ from 'lodash'
import DropdownSmall from '../../components/DropdownSmall'
import DropdownMedium from '../../components/DropdownMedium'
import { SearchInput } from '../../components/Input';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
let columns = {
  id: {
    defaultWidth: 48,
    width: 48,
    resize: false,
    swap: false,
    show: true
  },
  status: {
    defaultWidth: 110,
    width: 110,
    resize: true,
    swap: false,
    show: true
  },
  bayer_name: {
    defaultWidth: 130,
    width: 130,
    resize: true,
    swap: true,
    show: true
  },
  localization: {
    defaultWidth: 55,
    width: 55,
    resize: true,
    swap: true,
    show: true
  },
  phone: {
    defaultWidth: 150,
    width: 150,
    resize: true,
    swap: true,
    show: true
  },
  comment: {
    defaultWidth: 187,
    width: 187,
    resize: true,
    swap: true,
    show: true
  },
  total: {
    defaultWidth: 60,
    width: 60,
    resize: true,
    swap: true,
    show: true
  },
  product: {
    defaultWidth: 258,
    width: 258,
    resize: true,
    swap: true,
    show: true
  },
  pay: {
    defaultWidth: 55,
    width: 55,
    resize: true,
    swap: true,
    show: true
  },
  ppo: {
    defaultWidth: 74,
    width: 74,
    resize: true,
    swap: true,
    show: true
  },
  delivery: {
    defaultWidth: 70,
    width: 70,
    resize: true,
    swap: true,
    show: true
  },
  addres: {
    defaultWidth: 180,
    width: 180,
    resize: true,
    swap: true,
    show: true
  },
  ttn: {
    defaultWidth: 124,
    width: 124,
    resize: true,
    swap: true,
    show: true
  },
  ttn_status: {
    defaultWidth: 123,
    width: 123,
    resize: true,
    swap: true,
    show: true
  },
  ttn_user: {
    defaultWidth: 134,
    width: 134,
    resize: true,
    swap: true,
    show: true
  },
  office: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  date1: {
    defaultWidth: 124,
    width: 124,
    resize: true,
    swap: true,
    show: true
  },
  date2: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  date3: {
    defaultWidth: 124,
    width: 124,
    resize: true,
    swap: true,
    show: true
  },
  date4: {
    defaultWidth: 74,
    width: 74,
    resize: true,
    swap: true,
    show: true
  },
  date5: {
    defaultWidth: 129,
    width: 129,
    resize: true,
    swap: true,
    show: true
  },
  date6: {
    defaultWidth: 71,
    width: 71,
    resize: true,
    swap: true,
    show: true
  },
  date7: {
    defaultWidth: 124,
    width: 124,
    resize: true,
    swap: true,
    show: true
  },
  date8: {
    defaultWidth: 124,
    width: 124,
    resize: true,
    swap: true,
    show: true
  },
  site: {
    defaultWidth: 128,
    width: 128,
    resize: true,
    swap: true,
    show: true
  },
  ip: {
    defaultWidth: 124,
    width: 124,
    resize: true,
    swap: true,
    show: true
  },
  utm1: {
    defaultWidth: 129,
    width: 129,
    resize: true,
    swap: true,
    show: true
  },
  utm2: {
    defaultWidth: 167,
    width: 167,
    resize: true,
    swap: true,
    show: true
  },
  utm3: {
    defaultWidth: 80,
    width: 80,
    resize: true,
    swap: true,
    show: true
  },
  utm4: {
    defaultWidth: 89,
    width: 89
  },
  utm5: {
    defaultWidth: 67,
    width: 67,
    resize: true,
    swap: true,
    show: true
  },
  additional_1: {
    defaultWidth: 85,
    width: 85,
    resize: true,
    swap: true,
    show: true
  },
  additional_2: {
    defaultWidth: 99,
    width: 99,
    resize: true,
    swap: true,
    show: true
  },
  additional_3: {
    defaultWidth: 82,
    width: 82,
    resize: true,
    swap: true,
    show: true
  },
  additional_4: {
    defaultWidth: 82,
    width: 82,
    resize: true,
    swap: true,
    show: true
  },
  additional_5: {
    defaultWidth: 82,
    width: 82,
    resize: true,
    swap: true,
    show: true
  },
  additional_6: {
    defaultWidth: 82,
    width: 82,
    resize: true,
    swap: true,
    show: true
  },
  additional_7: {
    defaultWidth: 82,
    width: 82,
    resize: true,
    swap: true,
    show: true
  },
  additional_8: {
    defaultWidth: 82,
    width: 82,
    resize: true,
    swap: true,
    show: true
  },
  additional_9: {
    defaultWidth: 82,
    width: 82,
    resize: true,
    swap: true,
    show: true
  },
  additional_10: {
    defaultWidth: 90,
    width: 90,
    resize: true,
    swap: true,
    show: true
  },
  select: false
}

const Styles = styled.div`


table {
  padding-left: 10px;
}

@charset "UTF-8";
.container-info-settings {
  margin-left: 51px;
  margin-top: 35px;
  margin-right: 0px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  
}
@media (max-width: 800px) {
  .container-info-settings {
    margin-left: 30px;
  }
}
.container-info-settings .simplebar-track.simplebar-vertical {
  background-color: transparent;
  width: 8px;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 40px;
  cursor: pointer;
}
.container-info-settings .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 8px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  cursor: pointer;
}
.container-info-settings .simplebar-track.simplebar-horizontal {
  background-color: transparent;
  height: 8px;
  margin-right: 10px;
  margin-bottom: 40px;
  margin-left: 20px;
  cursor: pointer;
  padding-top: 2px;
  bottom: 0;
  border-radius: 10px;
}
.container-info-settings .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 8px;
  left: 0;
  right: 0;
  bottom: 38px;
  top: 0px;
  cursor: pointer;
  margin-bottom: 2px;
}
.container-info-settings .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
  cursor: pointer;
}
.container-info-settings .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  height: 10px;
}
.container-info-settings .simplebar-content-wrapper {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 30px;
}

@media screen and (max-height: 800px) {
  .container-info-settings .simplebar-track.simplebar-horizontal {
    margin-bottom: 60px;
  }
}
.crm-header {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.crm-header::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.crm-header {
  display: flex;
  margin: 0;
  position: fixed;
  padding-bottom: 5px;
  top: 55px;
  z-index: 333;
  background-color: white;
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
  flex-wrap: nowrap;
  padding-right: 20px;
}
.crm-header .crm-header-link:last-child {
  margin-right: 180px;
}
.crm-header .crm-header-link {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  text-align: center;
  margin: 1px;
  cursor: pointer;
  font-size: 12px;
  user-select: none;
}
.crm-header .crm-header-link .count-link {
  font-size: 10px;
  opacity: 0.5;
}

.color-64a727 {
  background-color: #64a727;
}

.color-515151 {
  background-color: rgba(81, 81, 81, 0.7);
}

.color-C4C4C4 {
  background-color: #C4C4C4;
}

.color-83004F {
  background-color: #83004F;
}

.color-91d100 {
  background-color: #91d100;
}

.color-C94F62 {
  background-color: #C94F62;
}

.color-fd7777 {
  background-color: #fd7777;
}

.color-9C02A7 {
  background-color: #9C02A7;
}

.color-1DD787 {
  background-color: #1DD787;
}

.color-00CC00 {
  background-color: #00CC00;
}

.color-00B9FF {
  background-color: #00B9FF;
}

.color-ffe600 {
  background-color: #d4c72a;
}

.color-FF0000 {
  background-color: #FF0000;
}

.color-FFCF00 {
  background-color: #FFCF00;
}

.color-91D100 {
  background-color: #91D100;
}

.color-da291c {
  background-color: #da291c;
}

.color-6996D3 {
  background-color: #6996D3;
}

.color-3415B0 {
  background-color: #3415B0;
}

.color-B0FF00 {
  background-color: #B0FF00;
}

.color-470010 {
  background-color: #470010;
}

.color-9C02A7 {
  background-color: #9C02A7;
}

.color-form {
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 2px;
  border-radius: 2px;
  left: 0;
  opacity: 0.75;
}

.btn-toggle {
  font-weight: 600;
  
}
.btn-toggle .color-form {
  height: 4px;
  bottom: 2px;
}

.arrow-bg {
  background-color: white;
  height: 25px;
  width: 40px;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 2222;
}
.arrow-bg .arrow-next {
  width: 13px;
  height: 13px;
  background-image: url("../img/arrow-down.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  transform: rotate(-90deg);
  opacity: 0.7;
  left: 20px;
  cursor: pointer;
}
.arrow-bg .arrow-prev {
  width: 13px;
  height: 13px;
  background-image: url("../img/arrow-down.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  transform: rotate(90deg);
  opacity: 0.7;
  cursor: pointer;
}

#hoverSelect {
  position: absolute;
  top: 0;
  left: 0;
  width: 95px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 12px;
  background: #515151;
  color: white;
  border-radius: 3px;
  z-index: 999;
  display: none;
}

.crm-table {
  margin-top: 0px;
  z-index: 888;
  
}

.container-info-settings tr td {
  white-space: nowrap;
  height: 18px;
  line-height: 14px;
}
.container-info-settings tr td .input-style {
  background: #d4d4d4;
  outline: none;
  border: 1px white solid;
  width: 100%;
  box-sizing: border-box;
  padding: 1px 3px;
  font-size: 10px;
  line-height: 14px;
}
.container-info-settings tr td .input-style::placeholder {
  font-size: 10px;
}
.container-info-settings tr td .count-message {
  background: rgba(156, 155, 158, 0.4);
  box-sizing: border-box;
  
  left: -2px;
  width: 17%;
  border-right: 2px white solid;
}
.container-info-settings tr td .tel-style {
  width: 83%;
}
.container-info-settings tr td .date-block {
  background: rgba(156, 155, 158, 0.4);
  padding: 0 3px;
  border: 1px white solid;
  min-width: 113px;
  justify-content: space-between;
  display: flex;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  line-height: 16px;
}
.container-info-settings tr td .date-block .date-style {
  width: 50px;
  text-align: center;
  border: none;
  font-size: 9px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  padding: 0;
}

.date-block {
  text-align: center;
}

.ttn-search {
  background: rgba(156, 155, 158, 0.4);
  outline: none;
  border: 1px white solid;
  width: 100%;
  box-sizing: border-box;
  font-size: 10px;
  line-height: 14px;
}
.ttn-search .ttn-style {
  width: 12%;
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  line-height: 16px;
  box-sizing: border-box;
  padding-left: 3px;
}
.ttn-search .ttn-style:first-child {
  width: 86%;
  border-right: 2px solid white;
}

table {
  border-collapse: collapse;
  width: max-content;
  font-size: 12px;
  white-space: nowrap;
}
 tr td {

  padding: 0px 4px;
  z-index: 0;
  
 
}


tr:nth-child(1) th {
  white-space: nowrap;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  border-radius: 3px 3px 0 0;
  padding-top: 7px;
}


.header-search {
  padding: 0;
  font-size: 10px;
  height: 18px;
  box-sizing: border-box;
}

.table-header {
  height: 24px;
  cursor: grab;
}

.crm-input {
  height: 18px;
}

.crm-main-table .country-block {
  text-align: center;
  
}
.crm-main-table .country-flag {
  text-align: center;
  box-sizing: border-box;
  height: 18px;
  
  top: 2px;
}
.crm-main-table .country-flag .flag {
  height: 13px;
}
.crm-main-table .svg-pos {
  
  top: 2px;
}
.crm-main-table .svg-pos img {
  height: 15px;
}
.crm-main-table .svg-pos .samovivoz path {
  fill: #515151;
}
.crm-main-table .tel-colum {
  width: inherit;
  height: 18px;
}
.crm-main-table .tel-colum .svg-wrap {
  display: inline-block;
}
.crm-main-table .tel-colum .svg-wrap .count {
  top: -2px;
}
.crm-main-table .tel {
  text-align: center;
  line-height: 16px;
  display: inline-block;
}
.crm-main-table .tel .mob-icon {
  
  top: 2px;
  margin-right: 5px;
  height: 13px;
}
.crm-main-table .svg-wrap {
  margin-left: 5px;
  z-index: 1;
  position: relative;
  margin-right: 3px;
  top: 2px;
}
.crm-main-table .svg-wrap .count {
  position: absolute;
  border-radius: 100%;
  font-size: 7px;
  width: 8px;
  height: 8px;
  font-weight: 600;
  background-color: #9C9B9E;
  color: white;
  text-align: center;
  right: -3px;
  line-height: 9px;
  top: -5px;
  border: 1.28571px solid #F1F1F1;
}
.crm-main-table .product-colum {
  text-align: center;
  
  top: -1px;
}
.crm-main-table .product-colum .svg-wrap {
  margin-left: 3px;
  margin-right: 8px;
  
  top: 4px;
}
.crm-main-table .product-colum .svg-wrap .count {
  right: -2px;
  border: 1.28571px solid #F1F1F1;
}
.crm-main-table .colum-pay {
  text-align: center;
}
.crm-main-table .ttn-block .ttn-position {
  justify-content: space-between;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
}
.crm-main-table .ttn-block .ttn-number {
  display: inline-block;
  text-align: left;
}
.crm-main-table .ttn-block .svg-wrap {
  margin-left: 3px;
  margin-right: 3px;
  display: inline-block;
}
.crm-main-table .ttn-block .svg-wrap .count {
  right: -4px;
  top: -3px;
}

.crm-main-table.select-toggle:hover {
  
  color: white;
}

.crm-main-table.selected-lock:hover {
  
}
.crm-main-table.selected-lock:hover td {
  background: rgba(198, 193, 190, 0.5);
  color: rgba(0, 0, 0, 0.2);
}
.crm-main-table.selected-lock:hover .id-table:before {
  content: "";
  background: none;
  background-image: url("../img/lock.svg");
  width: 12px;
  height: 12px;
  position: absolute;
  top: 3px;
  left: -15px;
}


.select-toggle img {
  opacity: 0.5;
}
.select-toggle  {
  background-color: rgba(81, 81, 81, 0.7);
}

.select-toggle td:nth-child(2)  {
  background-color: rgba(131, 131, 131);
}
.select-toggle td {
  color: white;
}
.select-toggle .np-ico path {
  opacity: 0.5;
}
.select-toggle .cls-2 {
  opacity: 0.5;
}
.select-toggle .date-time {
  color: white;
}
.select-toggle .svg-convert path {
  stroke: #F1F1F1;
}
.select-toggle .svg-wrap .count {
  background: #F1F1F1;
  color: #515151;
  border: 1.28571px solid rgba(81, 81, 81, 0.7);
}
.select-toggle .product-colum .svg-wrap path {
  fill: #F1F1F1;
}
.select-toggle .product-colum .svg-wrap .count {
  background: #F1F1F1;
  border: 1.28571px solid rgba(81, 81, 81, 0.7);
}
.select-toggle .card path {
  fill: #F1F1F1;
}
.select-toggle .coin path {
  fill: #F1F1F1;
}
.select-toggle .coin circle {
  stroke: #F1F1F1;
}
.select-toggle .convert-pay path {
  fill: #F1F1F1;
}
.select-toggle .svg-decline path {
  stroke: #F1F1F1;
}
.select-toggle .svg-trade path {
  stroke: #F1F1F1;
}
.select-toggle .svg-box path {
  fill: #F1F1F1;
}
.select-toggle .id-table:before {
  background: #515151 !important;
}

.selected-lock td {
  background: rgba(198, 193, 190, 0.5);
  color: rgba(0, 0, 0, 0.2);
}
.selected-lock td:nth-child(odd) {
  background: rgba(198, 193, 190, 0.5);
}
.selected-lock img {
  opacity: 0.5;
}
.selected-lock .np-ico path {
  opacity: 0.5;
}
.selected-lock .cls-2 {
  opacity: 0.5;
}
.selected-lock .svg-wrap .count {
  border: 1.28571px solid #d8d8d8;
}
.selected-lock .id-table:before {
  content: "";
  background-image: url("../img/lock.svg");
  width: 12px;
  height: 12px;
  position: absolute;
  top: 3px;
  left: -15px;
}
.selected-lock .date-time {
  color: #c5bfbf;
}

.id-table {
  
}


.hover:hover {
  background: rgba(91, 91, 91, 0.25);
}

.hover:hover {
  background: rgba(91, 91, 91, 0.25);
}

.hover:hover td:nth-child(2) {
  background: rgb(214, 214, 214);
}


.crm-main-table .id-table:before {
  content: "";
  width: 7px;
  height: 18px;
  position: absolute;
  background: transparent;
  left: -7px;
  border-radius: 3px 0 0 3px;
  top: 0;
}

.hover:hover .id-table:before {
  background: #515151;
}

.crm-main-table .status-table {
  text-align: center;
}
.crm-main-table .status-table .color-form2 {
  text-align: left;
  line-height: 14px;
  box-sizing: border-box;
  border-radius: 3px;
  color: white;
  opacity: 0.75;
  padding: 0.5px 6px;
  margin: 0 3px;
}




.new-order:after {
  content: "\\2022";
  width: 22px;
  height: 20px;
  background-color: white;
  position: absolute;
  color: #00B9FF;
  font-size: 25px;
  left: -22px;
  text-align: center;
  line-height: 0px;
  top: 8px;
  z-index: -1;
}

.color-928c42 {
  background-color: #928c42;
}

.color-470010 {
  background-color: #470010;
}

.color-83004F {
  background-color: #83004F;
}

.color-C94F62 {
  background-color: #C94F62;
}

.color-9C02A7 {
  background-color: #9C02A7;
}

.color-1DD787 {
  background-color: #1DD787;
}

.color-00CC00 {
  background-color: #00CC00;
}

.color-00B9FF {
  background-color: #00B9FF;
}

.color-FF0000 {
  background-color: #FF0000;
}

.color-FFCF00 {
  background-color: #FFCF00;
}

.color-91D100 {
  background-color: #91D100;
}

.color-F50296 {
  background-color: #F50296;
}

.color-6996D3 {
  background-color: #6996D3;
}

.color-3415B0 {
  background-color: #3415B0;
}

.color-B0FF00 {
  background-color: #B0FF00;
}

.colum-country {
  
  box-sizing: border-box;
}
.colum-country .country-btn {
  text-align: left;
  display: block;
  cursor: pointer;
  line-height: 16px;
  height: 16px;
  border: 1px solid white;
  background: #d4d4d4;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 3px;
}
.colum-country .country-btn .list-item img {
  position: absolute;
  left: 4px;
}
.colum-country .country-btn .list-item span {
  margin-left: 20px;
}
.colum-country .country-btn .list {
  height: 14px;
}
.status-table {
  background: white;
}

.status-table-hover{
  background: #cbcbcb !important;
}


 tr th:nth-child(1):after {
  content: "";
  width: 22px;
  height: 35px;
  background-color: white;
  position: absolute;
  color: #00B9FF;
  font-size: 25px;
  left: -22px;
  text-align: center;
  line-height: 0px;
  top: 0px;
  z-index: -1;
}

.colum-country .country-btn:after {
  content: "";
  position: absolute;
  background-image: url("../img/arrow-down.svg");
  width: 6px;
  height: 3px;
  background-size: 100%;
  top: 7px;
  right: 4px;
  opacity: 0.5;
}
.colum-country .block1 .list:hover:before {
  background-color: rgba(81, 81, 81, 0.3);
  content: "";
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 100%;
  top: 6px;
  left: -2px;
}
.colum-country .block1 {
  background: white;
  z-index: 3;
  color: black;
  display: none;
  position: absolute;
  text-align: left;
  overflow-x: hidden;
  height: 90px;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  width: 55px;
}
.colum-country .block1 .list-item img {
  position: absolute;
  left: 5px;
}
.colum-country .block1 .list-item span {
  margin-left: 25px;
}
.colum-country .block1 .list {
  height: 18px;
  line-height: 18px;
  margin-left: 5px;
}
.colum-country .block1 .list:first-child span {
  padding-left: 3px;
  margin-left: 0;
}
.colum-country .block1 .simplebar-track.simplebar-vertical {
  background-color: rgba(0, 0, 0, 0.1);
  width: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  bottom: 0;
  border-radius: 5px;
}
.colum-country .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 3px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: -9px;
  top: 0;
}
.colum-country .block1 .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
}
.colum-country .block1 .simplebar-content-wrapper {
  padding: 0;
}

.colum-pay {
  
  box-sizing: border-box;
}
.colum-pay .pay-btn {
  text-align: left;
  display: block;
  cursor: pointer;
  line-height: 16px;
  height: 16px;
  border: 1px solid white;
  background: #d4d4d4;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 3px;
}
.colum-pay .pay-btn .list-item img {
  margin-right: 5px;
  width: 12px;
  height: 12px;
  top: 2px;
  
  margin-left: 18px;
}
.colum-pay .pay-btn:after {
  content: "";
  position: absolute;
  background-image: url("../img/arrow-down.svg");
  width: 6px;
  height: 3px;
  background-size: 100%;
  top: 7px;
  right: 4px;
  opacity: 0.5;
}
.colum-pay .block1 .list:hover:before {
  background-color: rgba(81, 81, 81, 0.3);
  content: "";
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 100%;
  top: 6px;
  left: 6px;
}
.colum-pay .block1 {
  background: white;
  z-index: 3;
  color: black;
  display: none;
  position: absolute;
  text-align: left;
  overflow-x: hidden;
  height: 90px;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  width: 55px;
}
.colum-pay .block1 .simplebar-track.simplebar-vertical {
  background-color: rgba(0, 0, 0, 0.1);
  width: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  bottom: 0;
  border-radius: 5px;
}
.colum-pay .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 3px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: -9px;
  top: 0;
}
.colum-pay .block1 .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
}
.colum-pay .block1 .simplebar-content-wrapper {
  padding: 0;
}
.colum-pay .block1 .list {
  
  height: 18px;
}
.colum-pay .block1 .list img {
  margin-right: 5px;
  width: 12px;
  height: 12px;
  
  top: 2px;
}
.colum-pay .block1 .list-item {
  width: 100%;
  box-sizing: border-box;
  display: block;
  text-align: center;
}

.colum-delivery {
  box-sizing: border-box;
  border: none;
  font-size: 10px;
  
}
.colum-delivery .delivery-btn {
  text-align: left;
  display: block;
  cursor: pointer;
  line-height: 16px;
  height: 16px;
  border: 1px solid white;
  background: #d4d4d4;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 3px;
}
.colum-delivery .delivery-btn .list-item img {
  
  left: 0px;
  bottom: -2px;
  width: 12px;
  height: 12px;
}
.colum-delivery .delivery-btn .list-item {
  text-align: center;
  line-height: 18px;
}
.colum-delivery .delivery-btn:after {
  content: "";
  position: absolute;
  background-image: url("../img/arrow-down.svg");
  width: 6px;
  height: 3px;
  background-size: 100%;
  top: 7px;
  right: 4px;
  opacity: 0.5;
}
.colum-delivery .block1 .list:hover:before {
  background-color: rgba(81, 81, 81, 0.3);
  content: "";
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 100%;
  top: 6px;
  left: 6px;
}
.colum-delivery .block1 {
  z-index: 222;
  color: black;
  display: none;
  position: absolute;
  text-align: left;
  height: 90px;
  width: 100%;
  cursor: pointer;
  z-index: 2222;
  top: 18px;
  background-color: white;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
}
.colum-delivery .block1 .simplebar-track.simplebar-vertical {
  background-color: rgba(0, 0, 0, 0.1);
  width: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  bottom: 0;
  border-radius: 5px;
}
.colum-delivery .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 3px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: -9px;
  top: 0;
}
.colum-delivery .block1 .simplebar-track.simplebar-horizontal {
  background-color: rgba(0, 0, 0, 0.1);
  height: 3px;
  bottom: 0;
  margin: 0;
  border-radius: 5px;
  margin-left: 5px;
  padding-top: 0;
}
.colum-delivery .block1 .simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  height: 3px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 0;
  margin-left: 5px;
}
.colum-delivery .block1 .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  height: 3px;
  left: 0;
  top: 0;
}
.colum-delivery .block1 .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
}
.colum-delivery .block1 .simplebar-content-wrapper {
  padding: 0;
}
.colum-delivery .block1 .list {
  
  height: 16px;
}
.colum-delivery .block1 .list img {
  margin-right: 5px;
  width: 11px;
  height: 11px;
  
  top: 2px;
}
.colum-delivery .block1 .list-item {
  margin-left: 5px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  height: 16px;
}

.colum-employe {
  box-sizing: border-box;
  border: none;
  font-size: 10px;
  
}
.colum-employe .employe-btn {
  text-align: left;
  display: block;
  cursor: pointer;
  line-height: 16px;
  height: 16px;
  border: 1px solid white;
  background: #d4d4d4;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 3px;
  min-width: 100px;
}
.colum-employe .employe-btn .list-item img {
  
  left: 0px;
  bottom: -2px;
  width: 12px;
  height: 12px;
}
.colum-employe .employe-btn .list-item {
  text-align: center;
  line-height: 18px;
}
.colum-employe .employe-btn:after {
  content: "";
  position: absolute;
  background-image: url("../img/arrow-down.svg");
  width: 6px;
  height: 3px;
  background-size: 100%;
  top: 7px;
  right: 4px;
  opacity: 0.5;
}
.colum-employe .block1 {
  z-index: 222;
  color: black;
  display: none;
  position: absolute;
  text-align: left;
  height: 90px;
  width: 100%;
  overflow-x: hidden;
  cursor: pointer;
  z-index: 2222;
  top: 18px;
  background-color: white;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
}
.colum-employe .block1 .simplebar-track.simplebar-vertical {
  background-color: rgba(0, 0, 0, 0.1);
  width: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  bottom: 0;
  border-radius: 5px;
}
.colum-employe .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 3px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: -9px;
  top: 0;
}
.colum-employe .block1 .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
}
.colum-employe .block1 .simplebar-content-wrapper {
  padding: 0;
}
.colum-employe .block1 .list {
  
  height: 16px;
}
.colum-employe .block1 .list img {
  margin-right: 5px;
  width: 11px;
  height: 11px;
  
  top: 2px;
}
.colum-employe .block1 .list-item {
  margin-left: 5px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  height: 16px;
}

.colum-depart {
  box-sizing: border-box;
  border: none;
  font-size: 10px;
  
}
.colum-depart .depart-btn {
  text-align: left;
  display: block;
  cursor: pointer;
  line-height: 16px;
  height: 16px;
  border: 1px solid white;
  background: #d4d4d4;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 3px;
  min-width: 110px;
}
.colum-depart .depart-btn .list-item img {
  
  left: 0px;
  bottom: -2px;
  width: 12px;
  height: 12px;
}
.colum-depart .depart-btn .list-item {
  text-align: center;
  line-height: 18px;
}
.colum-depart .depart-btn:after {
  content: "";
  position: absolute;
  background-image: url("../img/arrow-down.svg");
  width: 6px;
  height: 3px;
  background-size: 100%;
  top: 7px;
  right: 4px;
  opacity: 0.5;
}
.colum-depart .block1 {
  z-index: 222;
  color: black;
  display: none;
  position: absolute;
  text-align: left;
  height: 90px;
  width: 100%;
  overflow-x: hidden;
  cursor: pointer;
  z-index: 2222;
  top: 18px;
  background-color: white;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
}
.colum-depart .block1 .simplebar-track.simplebar-vertical {
  background-color: rgba(0, 0, 0, 0.1);
  width: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  bottom: 0;
  border-radius: 5px;
}
.colum-depart .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 3px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: -9px;
  top: 0;
}
.colum-depart .block1 .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
}
.colum-depart .block1 .simplebar-content-wrapper {
  padding: 0;
}
.colum-depart .block1 .list {
  
  height: 16px;
}
.colum-depart .block1 .list img {
  margin-right: 5px;
  width: 11px;
  height: 11px;
  
  top: 2px;
}
.colum-depart .block1 .list-item {
  margin-left: 5px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  height: 16px;
}

.z-index {
  z-index: -1;
  
}

// .block1.toggle {
//   display: block;
// }

.list {
  
}

// .select-btn {
//   background-color: rgba(81, 81, 81, 0.7);
// }

// .wrap-hide {
//   opacity: 0;
//   visibility: hidden;
//   transition: 0.2s;
//   -webkit-transition: 0.2s;
//   -moz-transition: 0.2s;
//   bottom: -18px;
  
// }


.wrap-open {
  opacity: 1;
  visibility: visible;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  bottom: 0;
}

.svg-delivery {
  text-align: center;
}

.date-time {
  font-size: 10px;
  color: #7b7b7b;
  margin-left: 4px;
  text-align: center;
}



.max-lenght-comment {
  
}

.colum-sum {
  text-align: right;
}
.simplebar-track.simplebar-vertical {
  background-color: transparent;
  width: 8px;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 40px;
  cursor: pointer;
}
.simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 8px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  cursor: pointer;
}
.simplebar-track.simplebar-horizontal {
  background-color: transparent;
  height: 8px;
  margin-right: 10px;
  margin-bottom: 40px;
  margin-left: 20px;
  cursor: pointer;
  padding-top: 2px;
  bottom: 0;
  border-radius: 10px;
}
.simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 8px;
  left: 0;
  right: 0;
  bottom: 38px;
  top: 0px;
  cursor: pointer;
  margin-bottom: 2px;
}
.simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
  cursor: pointer;
}
.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  height: 10px;
}
.simplebar-content-wrapper {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 30px;
}
thead th .hide {
  background-color: transparent;
}




thead th .show {
  background-color: red;
  z-index: 12 !important;
}






.text-tooltip {
 
    font-size: 12px;
    display: block;
    margin-top: 7px;

}

thead th .tooltip {
    position: absolute;
    user-select: none;
    max-height: 100px;
    background-color: rgba(81, 81, 81, 0.6);
    border-radius: 3px;
    top: 0;
    color: white;
    padding: 4px 5px;
    white-space: normal;
    width: max-content;
    word-break: break-word;
    text-align: left;
    max-width: 300px;
    opacity: 0;
    visibility: hidden;
}
.disable-hover {
  pointer-events: none;
}




// .wrap-hide {
//   opacity: 0;
//   visibility: hidden;
//   transition: 0.2s;
//   -webkit-transition: 0.2s;
//   -moz-transition: 0.2s;
//   transition-delay: 0.2s;
//   bottom: -18px;
//   position: relative;
//   border: 1px solid white;
// }

.wrap-open {
  opacity: 1;
  visibility: visible;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  bottom: 0;
  // border: 1px solid white;
}

td .input-style {
  background: #d4d4d4;
  outline: none;
  border: none;
  width: 100%;
  font-weight: 300;
  box-sizing: border-box;
  padding: 0 3px;
  font-size: 10px;
  line-height: 16px;
}

.input-btn-large {
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 0;
  font-size: 10px;
  padding-left: 3px;
  line-height: 16px;
}
.btn-wrap-large .block1 .list-item {
  position: relative;
  left: 15px;
  height: 12px;
  display: inline-block;
}

.btn-wrap-large {
  text-align: left;
  display: block;
  cursor: pointer;
  line-height: 16px;
  height: 16px;
  width: 100%;
  background: #d4d4d4;
  color: rgba(0, 0, 0, 0.5);
}
.btn-wrap-large .input-btn-large {
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 0;
  font-size: 10px;
  padding-left: 3px;
  line-height: 16px;
}
.btn-wrap-large .input-btn-large::placeholder {
  font-size: 10px;
}

.btn-wrap-large .list-large:hover .text-lenght,
.btn-wrap-large .list-large:hover .text-lenght-2 {
  color: rgba(0, 0, 0, 0.5);
}
.btn-wrap-large .block1 {
  background: white;
  z-index: 3;
  color: black;
  visibility: hidden;
  opacity: 0;
  top: 0;
  position: absolute;
  text-align: left;
  overflow-x: hidden;
  height: 90px;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  width: 100%;
}
.btn-wrap-large .block1 .select-btn:before {
  left: 6px;
  top: 6px;
}
.btn-wrap-large .block1 .color-form {
  bottom: -4px;
}
.btn-wrap-large .block1 .list-large span:nth-child(2) {
  display: inline-block;
  height: 14px;
}
.btn-wrap-large .block1 .list-item {
  position: relative;
  left: 15px;
  height: 12px;
  display: inline-block;
}
.btn-wrap-large .block1 .list-large {
  height: 18px;
  line-height: 18px;
  position: relative;
  margin-right: 10px;
}
.btn-wrap-large .block1 .simplebar-track.simplebar-vertical {
  background-color: rgba(0, 0, 0, 0.1);
  width: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  bottom: 0;
  border-radius: 5px;
}
.btn-wrap-large .block1 .simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  background: rgba(0, 0, 0, 0.3);
  width: 3px;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.btn-wrap-large .block1 .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
}
.btn-wrap-large .block1 .simplebar-content-wrapper {
  padding: 0;
}

// .block1.toggle {
//   visibility: visible;
//   opacity: 1;
//   top: 16px;
//   transition: 0.3s;
//   -webkit-transition: 0.3s;
// }


// div::-webkit-scrollbar {
//   width: 8px;
// }

// div::-webkit-scrollbar-track {
//   background: white;
// }

// div::-webkit-scrollbar-thumb {
//   background-color: rgba(0, 0, 0, 0.3);
//   border-radius: 20px;
//   border: none;
// }

// div::-webkit-scrollbar:horizontal {
//   height: 8px;
// }

// div::-webkit-scrollbar-track:horizontal {
//   background: white;
// }

// div::-webkit-scrollbar-thumb:horizontal {
//   background-color: rgba(0, 0, 0, 0.3);
//   border-radius: 20px;
//   border: none;
// }

// div {
//   scrollbar-width: thin;
//   scrollbar-color: rgba(0, 0, 0, 0.3) white;
// }
`;
// let startTH = [{ width: 88, color: "#f1f1f1" }, { width: 58 }, { width: 156, color: "#f1f1f1" }, { width: 178 }, { width: 68 }, { width: 54, color: "#f1f1f1" }, { width: 68 }, { width: 58, color: "#f1f1f1" }, { width: 74 }, { width: 184, color: "#f1f1f1" }, { width: 64 }, { width: 124, color: "#f1f1f1" }, { width: 134 }, { width: 122, color: "#f1f1f1" }, { width: 134 }, { width: 68, color: "#f1f1f1" }, { width: 134 }, { width: 76, color: "#f1f1f1" }, { width: 74 }, { width: 74, color: "#f1f1f1" }, { width: 84 }, { width: 68, color: "#f1f1f1" }, { width: 136 }, { width: 92, color: "#f1f1f1" }, { width: 86 }, { width: 96, color: "#f1f1f1" }, { width: 74 }, { width: 92, color: "#f1f1f1" }, { width: 108 }, { width: 84, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 86 }, { width: 86, color: "#f1f1f1" }, { width: 94 }];




function useShow(
  elementRef,
  keys,
  cols,
  setCols
) {
  const [value, setValue] = useState(false)
  const [node1, setNode] = useState(null)
  const [tooltip, setTooltip] = useState(false)
  let node = null;
  const handleMouseEnter = e => {
    setValue(true);
    node.parentElement.style.cssText += 'z-index: 12';
  }
  const handleMouseDown = e => {
    setValue(true);
    setTooltip(true);
    node.parentElement.style.cssText += 'z-index: 12';
    node.removeEventListener('mouseleave', handleMouseLeave);
    node.removeEventListener('mouseenter', handleMouseEnter);
  }
  const handleMouseLeave = e => {
    setValue(false);
  }
  const handleMouseUp = e => {
    setValue(false)
    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouseleave', handleMouseLeave)
    try {
      node.parentElement.style.cssText += 'z-index: 2';

    } catch (error) {

    }
  }


  const handleDblClick = e => {
    node.parentElement.style.minWidth = cols[keys].defaultWidth + 'px'
    cols[keys].width = cols[keys].defaultWidth
    setCols(cols)
    node.dataset.dbl = true;
  }

  useEffect(() => {
    setNode(elementRef.current)
    node = elementRef?.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('mouseleave', handleMouseLeave)
      node.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mouseup', handleMouseUp)
      node.addEventListener('dblclick', handleDblClick)


      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter)
        node.removeEventListener('mouseleave', handleMouseLeave)
        node.removeEventListener('mousedown', handleMouseDown)
        node.removeEventListener('mouseup', handleMouseUp)
        node.addEventListener('dblclick', handleDblClick)

      }
    }
  }, [elementRef])

  return { value, node1, setValue, handleMouseEnter, handleMouseLeave, tooltip }
}



const Korobka = React.memo(({ }) => (
  <span className="svg-wrap">
    <span className="icon-korobka"></span>
    <span className="count">1</span>
  </span>
))

const Konv = React.memo(({ }) => (
  <span className="svg-wrap">
    <span className="icon-konv_2v"></span>



    <span className="count">4</span>
  </span>
))


// let Status = React.memo(({width})=> (

// ))


const Draggable = ({ index, setFlag, keys, cols, show, setCols }) => {
  const hoverRef = useRef(null)
  const isHover = useShow(hoverRef, keys, cols, setCols);
  const [x, setX] = useState(0)


  return (
    <DTD

      axis="x" position={{ x: 0, y: 0 }}
      onStart={(e) => { setX(e.pageX); setFlag(false); }}
      onStop={(e, d) => {
        setTimeout(() => {
          if (isHover.node1.dataset.dbl === "false") {
            if ((isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x) > cols[keys].defaultWidth) {
              cols[keys].width = (isHover.node1.parentElement.clientWidth - 8) + (e.pageX - x);
              setCols({ ...cols })
              isHover.node1.parentElement.style.minWidth = cols[keys].width + 'px';
            } else {
              cols[keys].width = cols[keys].defaultWidth;
              setCols({ ...cols })
              isHover.node1.parentElement.style.minWidth = cols[keys].defaultWidth + 'px';
            }
          }
        }, document.body.clientHeight - 120);
        isHover.node1.dataset.dbl = false;
        setFlag(true);
      }
      }
    ><div ref={hoverRef} data-dbl={false} style={{ width: '70px', cursor: 'pointer', position: 'absolute', top: 0, right: '-10px', zIndex: 10 }}>
        <div className={isHover.value ? 'show' : 'hide'} style={{ height: '25px', width: '10px', position: 'absolute', right: '10px' }}></div>
        <div className={isHover.value ? 'show' : 'hide'} style={isHover.tooltip ? { height: '100vh', width: '1px', position: 'absolute', right: '10px' } : { height: '25px', width: '1px', position: 'absolute', right: '10px' }}></div>
      </div></DTD>
  )

}
let drag = 0, drop = 0;

// const StyledTh = styled.th`
//   border-right: ${({ dragOver, flags }) => (dragOver && !flags) && "1px solid red"};
//   border-left: ${({ dragOver, flags }) => (dragOver && flags) && "1px solid red"};

// `;


const TH = ({ children, style, className, index, cols, setCols, col, keys, dragOver, setDragOver }) => {

  const [flag, setFlag] = useState(true)

  const handleDragStart = (e) => {
    const { id } = e.target;
    const idx = Object.keys(cols).indexOf(id);
    // setResize(false);
    drag = idx;

    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (e) => {
    const { id } = e.target;
    drop = Object.keys(cols).indexOf(id);
    setDragOver(id);
  };



  const handleOnDrop = (e) => {


    const { id } = [...e.nativeEvent.path].filter(x => x.id)[0];

    const droppedColIdx = Object.keys(cols).indexOf(id);
    const draggedColIdx = e.dataTransfer.getData("colIdx");

    if (cols[keys].swap) {
      let temp = move(parseInt(draggedColIdx), parseInt(droppedColIdx), cols)
      setCols(temp);
      setDragOver("");
    }



  };

  // , ...(dragOver && !(drag > drop)) && {borderRight:  "1px solid red", zIndex: 100}, ...(dragOver && (drag > drop)) && {borderLeft:  "1px solid red", zIndex: 100} }
  // let styless = [(dragOver && (drag < drop)) && {borderRight:  "1px solid red"}, (dragOver && (drag > drop)) && {borderLeft:  "1px solid red"}]

  let styles = cols[keys].swap ? {} : { userSelect: 'none' }
  let styleDrag = (dragOver, flags) => {

    return [(dragOver && !flags) && { position: 'absolute', right: 0, top: 0, height: '100vh', width: 1, backgroundColor: 'red' }, (dragOver && flags) && { position: 'absolute', left: 0, top: 0, height: '100vh', width: 1, backgroundColor: 'red' }]
  }

  return (


    <th
      style={{ ...style, ...styles }} className={'drag'} id={col}
      key={col}
      draggable={flag && cols[keys].swap}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleOnDrop}
      onDragEnter={handleDragEnter}
    >

      {children}
      {(cols[keys].swap) && <div style={{ ...styleDrag(col === dragOver, drag > drop)[0], ...styleDrag(col === dragOver, drag > drop)[1] }}></div>}
      {(cols[keys].resize) && <Draggable index={index} keys={keys} cols={cols} setCols={setCols} setFlag={setFlag} />}
    </th>
  )
}


// let move = (from, to, arr) => arr.splice(to, 0, arr.splice(from, 1)[0]);
let move = (from, to, arr) => {
  let temp = Object.keys(arr);
  temp.splice(to, 0, temp.splice(from, 1)[0])

  var obj = {};
  for (let i = 0; i < temp.length; i++) {
    obj[temp[i]] = arr[temp[i]];
  }

  return obj;
};

let ticking = false;
var timer;
const Wrapper = ({ }) => (
  <div style={{ width: "100%", height: document.body.clientHeight - 120, position: 'absolute', backgroundColor: 'rgba(111, 111, 111, 0.1)', top: 0, left: 0, zIndex: -1 }}></div>
)
const TD = React.memo(({ children }) => (
  <td className="" onMouseEnter={e => {
    timer = setTimeout(() => {
      let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
    23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
    22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
    23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

      document.getElementById("tooltipBtn").style.fontSize = '12px';

      document.getElementById("tooltipBtn").innerText = ukraine;

      let posElement = e.target.getBoundingClientRect();

      document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
      document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
      document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';

    }, 300);

  }}
    onMouseLeave={e => {
      document.getElementById("tooltipBtn").style.animation = '';
      document.getElementById("tooltipBtn").style.fontSize = '12px';
      clearTimeout(timer);
    }} >{children}</td>
))
let timers = null,
  selects = true,
  last = 0;
let isDown = false;
let startX;
let scrollLeft;




const options = [
  { key: '0', text: 'Все' },
  { key: '1', text: 'П/п' },
  { key: '2', icon: 'icon-kievstar' },
  { key: '3', icon: 'icon-kievstar' },
  { key: '4', icon: 'icon-kievstar' },
  { key: '5', icon: 'icon-kievstar' },
  { key: '6', icon: 'icon-kievstar' },
  { key: '7', icon: 'icon-kievstar' },
  { key: '8', icon: 'icon-kievstar' },
  { key: '9', icon: 'icon-kievstar' }

]

// const options = [
//   { key: 'English', text: 'English', value: 'English' },
//   { key: 'French', text: 'French', value: 'French' },
//   { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
//   { key: 'German', text: 'German', value: 'German' },
//   { key: 'Chinese', text: 'Chinese', color: 'red', value: 'Chinese' },
// ]
function Order({ data, rowHeight, visibleRows, navigation, changeStart, changeEnd }) {
  const rootRef = React.useRef();
  const [start, setStart] = React.useState(0);
  const [arr, setArr] = useState(data)
  const [column, setColumn] = useState(columns);
  const [visible, setVisible] = React.useState(visibleRows);
  const [dragOver, setDragOver] = useState("");
  const [resize, setResize] = React.useState(true);
  const [state, setState] = useState([{
      startDate: new Date(),
      endDate: null,
      key: 'selection'
      }])
  function getTopHeight() {

    return rowHeight * start;
  }
  function getBottomHeight() {
    return rowHeight * (data.length - (start + visible + 1));
  }



  function update(e) {
    // setTimeout(() => {
    setStart(Math.min(
      Math.floor(data.length - visible - 1),
      Math.floor((e.target.scrollTop - Math.floor(document.body.clientHeight * 1.3) < 0 ? 0 : Math.floor(e.target.scrollTop - document.body.clientHeight * 1.3)) / rowHeight)

    ));

    // }, 0);
    // changeStart(Math.floor(e.target.scrollTop / rowHeight));
    // changeEnd(Math.floor(e.target.scrollTop / rowHeight + visible + 1))

    // document.getElementById("tooltipBtn").style.animation = '';
    // document.getElementById("tooltipBtn").style.fontSize = '12px';
  }


  React.useEffect(async () => {








    function onKeyDown(e) {
      let isCtrl = e.ctrlKey || e.metaKey,
        keyA = e.which == 65;
      // arr.map(x => x['select'] = true)

      // console.log(arr);
      if (isCtrl && keyA && selects) {
        setArr(arr.map(x => x['select'] = true));
        selects = false;
        e.preventDefault()

      } else if (isCtrl && keyA && !selects) {
        setArr(arr.map(x => x['select'] = false));
        selects = true;
        e.preventDefault()


      }
    }



    function onScroll(e) {


      clearTimeout(timers);
      if (!document.querySelector('tbody').classList.contains('disable-hover')) {
        document.querySelector('tbody').classList.add('disable-hover')
      }
      update(e);

      timers = setTimeout(function () {
        document.querySelector('tbody').classList.remove('disable-hover')
      }, 350);
    }

    function onMouseDown(e) {
      console.log(e.path[0].classList);
      if (!e.path[0].classList.contains('drag') && !e.path[0].classList.contains('show')) {
        isDown = true;
        startX = e.pageX - rootRef.current.offsetLeft;
        scrollLeft = rootRef.current.scrollLeft;

      } else {
        isDown = false;
      }

    }

    function onMouseLeave(e) {
      isDown = false;
    }

    function onMouseLeave(e) {
      isDown = false;
    }


    function onClick(e) {
      try {
        let index = parseInt(e.path.filter(x => x.localName == 'tr')[0].dataset.index);

        let isCtrl = e.ctrlKey || e.metaKey;
        let isShift = e.shiftKey;
        if (isCtrl) {
          arr[index]['select'] = !arr[index]['select'];
          setArr([...arr]);
        } else if (isShift) {
          if (last < index) {
            setArr(arr.map(x => x['select'] = false))
            arr.slice(last, index + 1).map(x => x['select'] = true);
            setArr([...arr])
          } else {
            setArr(arr.map(x => x['select'] = false))
            arr.slice(index, last + 1).map(x => x['select'] = true);
            setArr([...arr])
          }
        }
        else if (!isCtrl && !isShift) {
          if (last != index)
            setArr(arr.map(x => x['select'] = false))
          arr[index]['select'] = !arr[index]['select'];
          setArr([...arr])
        }
        e.preventDefault()

        last = index;
      } catch (e) { }

    }
    function onMouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rootRef.current.offsetLeft;
      const walk = (x - startX) * 5 //scroll-fast
      rootRef.current.scrollLeft = scrollLeft - walk;
    }

    document.addEventListener('mousedown', onClick, false);
    rootRef.current.addEventListener('mousedown', onMouseDown, false);
    rootRef.current.addEventListener('mouseleave', onMouseLeave, false);
    rootRef.current.addEventListener('mouseup', onMouseLeave, false);
    rootRef.current.addEventListener('mousemove', onMouseMove, false);
    // function resize(e) {
    //   setVisible(Math.floor((document.body.clientHeight - 124) / 18) + Math.floor((document.body.clientHeight - 124) * 1.3 / 18) * 2)
    // }
    // window.addEventListener('resize', resize, false)

    rootRef.current.addEventListener('scroll', onScroll, false);
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      rootRef.current.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClick);
      rootRef.current.removeEventListener('mousedown', onMouseDown);
      rootRef.current.removeEventListener('mouseleave', onMouseLeave);
      rootRef.current.removeEventListener('mouseup', onMouseLeave);
      rootRef.current.removeEventListener('mousemove', onMouseMove);
      // window.removeEventListener('resize', resize)

    }
  }, [data.length, visibleRows, rowHeight]);


  // function onClick(e, index) {
  //   console.log(arr);



  // }

  return (
    <Styles>
      <div className="crm-header" id="crmHeader">
        <div className="crm-header-link allOrder"><span className="color-C4C4C4 color-form"></span><span className="btn-link max-lenght">Все </span><span className="count-link">755</span></div>
        <div className="crm-header-link newOrder"><span className="color-515151 color-form"></span><span className="btn-link max-lenght new-orders-header">Новый </span><span className="count-link">181</span></div>
        <div className="crm-header-link acceptOrder"><span className="color-91d100 color-form"></span><span className="btn-link max-lenght">Принят </span><span className="count-link">299</span></div>
        <div className="crm-header-link declineOrder"><span className="color-fd7777 color-form"></span><span className="btn-link max-lenght">Отказ </span><span className="count-link">6</span></div>
        <div className="crm-header-link upakovanOrder"><span className="color-928c42 color-form"></span><span className="btn-link max-lenght">Упакован </span><span className="count-link">16</span></div>
        <div className="crm-header-link peredanOrder"><span className="color-c6b922 color-form"></span><span className="btn-link max-lenght">Передан </span><span className="count-link">16</span></div>
        <div className="crm-header-link sendOrder"><span className="color-e2d317 color-form"></span><span className="btn-link max-lenght">Отправлен </span><span className="count-link">30</span></div>
        <div className="crm-header-link vikuplenOrder"><span className="color-64a727 color-form"></span><span className="btn-link max-lenght">Выкуплен </span><span className="count-link">43</span></div>
        <div className="crm-header-link moneyGrab"><span className="color-2c8b11 color-form"></span><span className="btn-link max-lenght">Деньги получены </span><span className="count-link">43</span></div>
        <div className="crm-header-link finishOrder"><span className="color-00CC00 color-form"></span><span className="btn-link max-lenght">Завершён </span><span className="count-link">43</span></div>
        <div className="crm-header-link backOrder"><span className="color-da291c color-form"></span><span className="btn-link max-lenght">Возврат (в пути) </span><span className="count-link">42</span></div>
        <div className="crm-header-link backOrderWarehouse"><span className="color-FF0000 color-form"></span><span className="btn-link max-lenght">Возврат (завершён) </span><span className="count-link">42</span></div>
        <div className="crm-header-link dropWaitTtn"><span className="color-856915 color-form"></span><span className="btn-link max-lenght">(Drop) Ожидает ТТН </span><span className="count-link">42</span></div>
        <div className="crm-header-link dropAssignedTtn"><span className="color-c7a95c color-form"></span><span className="btn-link max-lenght">(Drop) Присвоена ТТН </span><span className="count-link">20</span></div>
        <div className="crm-header-link dropSend"><span className="color-d7a214 color-form"></span><span className="btn-link max-lenght">(Drop) Отправлен </span><span className="count-link">3</span></div>
        <div className="crm-header-link dropBuying"><span className="color-68a6d7 color-form"></span><span className="btn-link max-lenght">(Drop) Выкуплен </span><span className="count-link">5</span></div>
        <div className="crm-header-link dropFinish"><span className="color-169dd9 color-form"></span><span className="btn-link max-lenght">(Drop) Завершён </span><span className="count-link">5</span></div>
        <div className="crm-header-link dropBack"><span className="color-a82451 color-form"></span><span className="btn-link max-lenght">(Drop) Возврат </span><span className="count-link">5</span></div>
        <div className="crm-header-link dropBackFinish"><span className="color-d90d53 color-form"></span><span className="btn-link max-lenght">(Drop) Возврат (учтён) </span><span className="count-link">5</span></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      </div>
      <div style={{ height: document.body.clientHeight - 100, overflow: 'auto', paddingLeft: 10, paddingRight: 100, willChange: 'transform', width: document.body.clientWidth - 220 }} ref={rootRef}>

        <table style={{ width: 0 }}>
          <thead>
            <tr className="table-header">





              {Object.keys(column).map((x, i) => {


                if (x === 'id') {
                  return (

                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: 0, zIndex: 3, backgroundColor: '#F1F1F1'
                    }} className="header-id" key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>


                      ID

                    </TH>
                  )
                }

                if (x === 'status') {
                  return (

                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, left: column['id'].width, zIndex: 3,
                      minWidth: 110, backgroundColor: '#fff'
                    }} className="header-status" key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      Статус
                    </TH>
                  )
                }

                if (x === "ppo") {
                  return (
                    <TH style={{
                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {/*  */}
                      {'ПPPO'}
                    </TH>
                  )
                }
                if (x === "bayer_name") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Покупатель'}
                    </TH>
                  )
                }
                if (x === "localization") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Страна'}
                    </TH>
                  )
                }
                if (x === "phone") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Телефон'}
                    </TH>
                  )
                }
                if (x === "comment") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Комментарий'}
                    </TH>

                  )
                }
                if (x === "total") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Сумма'}
                    </TH>
                  )
                }
                if (x === "product") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Товар'}
                    </TH>
                  )
                }
                if (x === "pay") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Оплата'}
                    </TH>
                  )
                }
                if (x === "delivery") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доставка'}
                    </TH>
                  )
                }
                if (x === "addres") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Адрес'}
                    </TH>
                  )
                }
                if (x === "ttn") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'ТТН'}
                    </TH>

                  )
                }
                if (x === "ttn_status") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'ТТН статус'}
                    </TH>
                  )
                }
                if (x === "ttn_user") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Просмотрел'}
                    </TH>
                  )
                }
                if (x === "office") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Отдел'}
                    </TH>

                  )
                }
                if (x === "date1") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Добавлен'}
                    </TH>
                  )
                }
                if (x === "date2") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Открыт'}
                    </TH>
                  )
                }
                if (x === "date3") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Принят'}
                    </TH>

                  )
                }
                if (x === "date4") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Принят за'}
                    </TH>
                  )
                }
                if (x === "date5") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Принял'}
                    </TH>

                  )
                }
                if (x === "date6") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Отправка'}
                    </TH>
                  )
                }
                if (x === "date7") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Отправлен'}
                    </TH>


                  )
                }
                if (x === "date8") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Изменен'}
                    </TH>


                  )
                }
                if (x === "site") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Сайт'}
                    </TH>
                  )
                }
                if (x === "ip") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'IP'}
                    </TH>
                  )
                }
                if (x === "utm1") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'utm_'}
                    </TH>
                  )
                }
                if (x === "utm2") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'utm_medium'}
                    </TH>
                  )
                }
                if (x === "utm3") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'utm_term'}
                    </TH>
                  )
                }
                if (x === "utm4") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'utm_content'}
                    </TH>
                  )
                }
                if (x === "utm5") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'utm_campaign'}
                    </TH>
                  )
                }
                if (x === "additional_1") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 1'}
                    </TH>
                  )
                }
                if (x === "additional_2") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 2'}
                    </TH>
                  )
                }
                if (x === "additional_3") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 3'}
                    </TH>
                  )
                }
                if (x === "additional_4") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 4'}
                    </TH>
                  )
                }
                if (x === "additional_5") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 5'}
                    </TH>
                  )
                }
                if (x === "additional_6") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 6'}
                    </TH>
                  )
                }
                if (x === "additional_7") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 7'}
                    </TH>
                  )
                }
                if (x === "additional_8") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 8'}
                    </TH>
                  )
                }
                if (x === "additional_9") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {'Доп. поле 9'}
                    </TH>
                  )
                }
                if (x === "additional_10") {
                  return (
                    <TH style={{

                      minWidth: column[x].width,
                      position: 'sticky',
                      top: 0, backgroundColor: i % 2 === 0 ? '#F1F1F1' : '#fff', zIndex: 2
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {'Доп. поле 10'}
                    </TH>
                  )
                }
              }


              )}



            </tr>
            <tr
            // style={{ height: 0, zIndex: -1, position: 'sticky', top: 24, left: 0 }} 
            // className="table-header"
            >





              {Object.keys(column).map((x, i) => {
                if (x === "id") {
                  return (

                    <th>
                      <SearchInput name={'wrap-hide'} type={'id'} />
                    </th>
                  )
                }
                if (x === "status") {
                  return (

                    <th></th>
                  )
                }
                if (x === "ppo") {
                  return (
                    <th>
                      <div className="wrap-hide">
                        <SearchInput type={'phone'} />
                        <DropdownSmall options={options} />
                      </div>
                    </th>
                  )
                }
                if (x === "bayer_name") {
                  return (
                    <th>
                      <SearchInput name={'wrap-hide'} type={'purchaser'} />
                    </th>
                  )
                }
                if (x === "localization") {
                  return (
                    <th>
                      <DropdownMedium options={options} />
                    </th>
                  )
                }
                if (x === "phone") {
                  return (
                    <th>
                      <div className="wrap-hide">
                        <DropdownSmall options={options} />
                        <SearchInput type={'phone'} />
                        <DropdownSmall options={options} />
                      </div>
                    </th>
                  )
                }
                if (x === "comment") {
                  return (
                    <th>
                      <SearchInput name={'wrap-hide'} type={'comment'} len={500} />

                    </th>

                  )
                }
                if (x === "total") {
                  return (
                    <th>
                      <SearchInput name={'wrap-hide'} type={'price'} />

                    </th>
                  )
                }
                if (x === "product") {
                  return (
                    <th>
                      <div className="wrap-hide">

                        <SearchInput type={'phone'} />

                        <DropdownSmall options={options} />
                        <DropdownSmall options={options} />
                      </div>
                    </th>
                  )
                }
                if (x === "pay") {
                  return (
                    <th>
                      <DropdownMedium options={options} />

                    </th>
                  )
                }
                if (x === "delivery") {
                  return (
                    <th>
                      <DropdownMedium width={'100%'} options={options} />

                    </th>
                  )
                }
                if (x === "addres") {
                  return (
                    <th>
                      <SearchInput type={'comment'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn") {
                  return (
                    <th>
                      <div className="wrap-hide">
                        <SearchInput type={'phone'} />

                        <DropdownSmall options={options} />
                      </div>
                    </th>

                  )
                }
                if (x === "ttn_status") {
                  return (
                    <th>
                      <SearchInput type={'comment'} name={'wrap-hide'} len={200} />
                    </th>
                  )
                }
                if (x === "ttn_user") {
                  return (
                    <th></th>
                  )
                }
                if (x === "office") {
                  return (
                    <th></th>

                  )
                }
                if (x === "date1") {
                  return (
                    <th>
                      <DateRangePicker
                        onChange={item => setState([item.selection])}
                        months={1}
                        minDate={addDays(new Date(), -300)}
                        maxDate={addDays(new Date(), 900)}
                        direction="vertical"
                        scroll={{ enabled: true }}
                        ranges={state}
                      />

                    </th>
                  )
                }
                if (x === "date2") {
                  return (
                    <th></th>
                  )
                }
                if (x === "date3") {
                  return (
                    <th></th>

                  )
                }
                if (x === "date4") {
                  return (
                    <th></th>
                  )
                }
                if (x === "date5") {
                  return (
                    <th></th>

                  )
                }
                if (x === "date6") {
                  return (
                    <th></th>
                  )
                }
                if (x === "date7") {
                  return (
                    <th></th>


                  )
                }
                if (x === "date8") {
                  return (
                    <th></th>

                  )
                }
                if (x === "site") {
                  return (
                    <th>
                      <SearchInput name={'wrap-hide'} type={'site'} />

                    </th>
                  )
                }
                if (x === "ip") {
                  return (
                    <th>
                      <SearchInput name={'wrap-hide'} type={'ip'} />
                    </th>
                  )
                }
                if (x === "utm1") {
                  return (
                    <th>
                      <SearchInput type={'comment'} name={'wrap-hide'} len={100} />

                    </th>
                  )
                }
                if (x === "utm2") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm3") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm4") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "utm5") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_1") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_2") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_3") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_4") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_5") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_6") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_7") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_8") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_9") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
                if (x === "additional_10") {
                  return (
                    <th><SearchInput type={'comment'} name={'wrap-hide'} len={100} /></th>
                  )
                }
              }


              )}



            </tr>
            <tr style={{ height: 0, zIndex: -1, position: 'sticky', top: 24, left: 0 }} className="table-header">





              {Object.keys(column).map((x, i) => {
                if (x === "id") {
                  return (

                    <TH style={{
                      position: 'sticky',
                      top: 0, left: 0, zIndex: 3,
                    }} className="header-id" key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "status") {
                  return (

                    <TH style={{
                      position: 'sticky',
                      top: 0, left: column['id'].width, zIndex: 3,
                      minWidth: 110
                    }} className="header-status" key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "ppo") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>

                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "bayer_name") {
                  return (
                    <TH style={{


                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "localization") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "phone") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "comment") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>

                  )
                }
                if (x === "total") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "product") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "pay") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "delivery") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "addres") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "ttn") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>

                  )
                }
                if (x === "ttn_status") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "ttn_user") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "office") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>

                  )
                }
                if (x === "date1") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "date2") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "date3") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>

                  )
                }
                if (x === "date4") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "date5") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>

                  )
                }
                if (x === "date6") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "date7") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>


                  )
                }
                if (x === "date8") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>


                  )
                }
                if (x === "site") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "ip") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "utm1") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "utm2") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "utm3") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "utm4") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "utm5") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_1") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_2") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_3") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_4") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_5") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_6") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_7") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_8") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_9") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
                if (x === "additional_10") {
                  return (
                    <TH style={{

                      position: 'sticky',
                      top: 0, zIndex: -1
                    }} key={i} index={i} keys={x} cols={column} setCols={setColumn} col={x} dragOver={dragOver} setDragOver={setDragOver}>
                      {i % 2 === 0 && <Wrapper />}
                    </TH>
                  )
                }
              }


              )}



            </tr>
          </thead>
          <tbody>
            <div style={{ height: getTopHeight() }} />

            {arr.slice(start, start + visible + 1).map((row, rowIndex) => (
              <tr
                style={{ height: rowHeight, fontFamily: 'Raleway, BabelStoneFlags' }}
                key={start + rowIndex}
                className={"crm-main-table " + (data[start + rowIndex]['select'] ? "select-toggle" : 'hover')}
                data-index={start + rowIndex}
              // onClick={e=> onClick(e, start+rowIndex)}
              >



                {Object.keys(column).map((x, i) => {
                  if (x === 'id') {
                    return (
                      <td className="id-table new-orders" style={{
                        position: 'sticky',
                        left: 0, zIndex: 1,
                      }}>{start + rowIndex + 1}</td>
                    )
                  }
                  if (x === 'status') {
                    return (

                      <td className="status-table" style={{
                        position: 'sticky',
                        left: column['id'].width, zIndex: 1,
                      }}>
                        <div className="new-zakaz color-515151 color-form2" style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: column['status'].width }} >
                          Новыйgergregergergerger
                        </div>
                        {/* <Status width={column['status'].width}   /> */}
                      </td>
                    )
                  }
                  if (x === "ppo") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
      23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
      22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
      23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >{'+38 096 514 25 46'}

                        <Konv />
                      </td>
                    )
                  }

                  if (x === "bayer_name") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >{'Александр Сергеевич'}</td>
                    )
                  }
                  if (x === "localization") {
                    return (
                      <td className="country-block flags ua" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >
                        &#x1F1FA;&#x1F1E6;
                      </td>
                    )
                  }
                  if (x === "phone") {
                    return (
                      <td className="tel-colum flags" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >
                        <span className="icon-kievstar"></span>


                        <span className="tel-number max-lenght"> +38 096 514 25 46</span>
                        <Konv />
                      </td>
                    )
                  }
                  if (x === "comment") {
                    return (
                      <td className="max-lenght-comment" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >Lorem ipsum dolor sit amet c...</td>

                    )
                  }
                  if (x === "total") {
                    return (
                      <td className="colum-sum" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >9555.40</td>
                    )
                  }
                  if (x === "product") {
                    return (
                      <TD>
                        <span className="product-colum">
                          <Korobka />
                          <Korobka />
                          <span className="max-lenght-product">Чай Монастырский (1шт. x 100.00 = 1001...</span></span>
                      </TD>

                    )
                  }
                  if (x === "pay") {
                    return (
                      <td className="colum-pay flags" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >
                        <span className="icon-konvert"></span>
                      </td>
                    )
                  }
                  if (x === "delivery") {
                    return (
                      <td className="svg-delivery flags" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >
                        <span className="icon-novay_22"></span>
                      </td>
                    )
                  }
                  if (x === "addres") {
                    return (
                      <td className="addres-block" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >Євминка, Відділення №1: вул....</td>

                    )
                  }
                  if (x === "ttn") {
                    return (
                      <td className="ttn-block flags" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >
                        <div className="ttn-position">
                          <span className="ttn-number max-lenght">20450428329016</span>
                          <Korobka />
                        </div>
                      </td>

                    )
                  }
                  if (x === "ttn_status") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >Нова пошта очікує ...</td>
                    )
                  }
                  if (x === "ttn_user") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >Лебедев Евгений Ал...</td>
                    )
                  }
                  if (x === "office") {
                    return (
                      <td className="otdel-block max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >Розничный магазин</td>

                    )
                  }
                  if (x === "date1") {
                    return (
                      <td className="date-block" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >2020-00-00 </td>

                    )
                  }
                  if (x === "date2") {
                    return (
                      <td className="date-time otkrit" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >10/00:03:25</td>

                    )
                  }
                  if (x === "date3") {
                    return (
                      <td className="date-block" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >2020-00-00 </td>


                    )
                  }
                  if (x === "date4") {
                    return (
                      <td className="date-time acceptza" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >00:03:23</td>


                    )
                  }
                  if (x === "date5") {
                    return (
                      <td className="date-time peredan" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >03/00:03:23</td>

                    )
                  }
                  if (x === "date6") {
                    return (
                      <td className="date-block" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >2021-01-01 </td>


                    )
                  }
                  if (x === "date7") {
                    return (
                      <td className="date-block" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >2021-04-08 </td>



                    )
                  }
                  if (x === "date8") {
                    return (
                      <td className="date-block" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >2021-01-01 </td>




                    )
                  }
                  if (x === "site") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} >www.abrakadabra.com</td>)
                  }
                  if (x === "ip") {
                    return (
                      <TD>
                        <span className="icon-kievstar"></span> <span className="icon-kievstar"></span> <span className="icon-kievstar"></span> &#x1F1FA;&#x1F1E6;192.168.168.168
                      </TD>
                    )
                  }
                  if (x === "utm1") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>
                    )
                  }
                  if (x === "utm2") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>
                    )
                  }
                  if (x === "utm3") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>
                    )
                  }
                  if (x === "utm4") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>
                    )
                  }
                  if (x === "utm5") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>
                    )
                  }
                  if (x === "additional_1") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_2") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_3") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_4") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_5") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_6") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_7") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_8") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_9") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        timer = setTimeout(() => {
                          let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                          document.getElementById("tooltipBtn").style.fontSize = '12px';

                          document.getElementById("tooltipBtn").innerText = ukraine;

                          let posElement = e.target.getBoundingClientRect();

                          document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                          document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";
                          document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                        }, 300);

                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                          clearTimeout(timer);
                        }} ></td>

                    )
                  }
                  if (x === "additional_10") {
                    return (
                      <td className="max-lenght" onMouseEnter={e => {
                        let ukraine = `22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 не подходит\n
                        22.08 11:45 откл/12:16 откл/16:43 не отв/19:19 откл\n
                        23.08 12:54 откл/17:31 не отв/19:32 перезв. 20:34 в отказ`;

                        document.getElementById("tooltipBtn").style.fontSize = '12px';

                        document.getElementById("tooltipBtn").innerText = ukraine;

                        let posElement = e.target.getBoundingClientRect();

                        document.getElementById("tooltipBtn").style.left = posElement.x - 4 + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 22 + "px";

                        document.getElementById("tooltipBtn").style.animation = '0.4s ease 0.4s 1 normal forwards running delay-btn';


                      }}
                        onMouseLeave={e => {
                          document.getElementById("tooltipBtn").style.animation = '';
                          document.getElementById("tooltipBtn").style.fontSize = '12px';
                        }} ></td>

                    )
                  }
                })}
              </tr>
            ))}
            <div style={{ height: getBottomHeight() }} />

          </tbody>
        </table>
      </div>
      {/* <Zakazy isModal={true} /> */}
    </Styles>
  )
}




export default Order;


