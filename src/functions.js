import store from './store'
export const validateInput = (value, length, email, revalue, reverse) => {
	let end = false
	if(email === undefined) email = false
	if(!length) length = 1

	if(email){
		let index = null
		for(let i = 0; i < value.length; i++)
			if(value[i].charCodeAt(0)=== 64 && i !== 0){
				index = i
				break
			}
		if(index)
			for(let i = index; i < value.length; i++)
				if(value[i].charCodeAt(0)=== 46 && i > index + 2){
					end = false
					index = i
					break
				}
		if(index === null || index > value.length - 3) end = true;
	}
	else
		if(reverse === false)
			if(value && revalue)
				if(value !== revalue) end = true
				else end = false
			else end = false	
		else
			if((!value && value !== 0) || value.length < length || (reverse && value === revalue)) end = true
			else end = false
	

	return end
}

let getTime = date => {
	let time = new Date(date);
	return checkTime(time.getHours()) + ':' + checkTime(time.getMinutes()); 
}

export const getMonthName = (month, reverse) => {
	if(reverse)
		switch(month)
	  {
			case 'января': 		return 0;	    
			case 'февраля': 	return 1;	    
			case 'марта': 		return 2;	    
			case 'апреля': 		return 3;	    
			case 'мая': 			return 4;	    
			case 'июня': 			return 5;	    
			case 'июля': 			return 6;	    
			case 'августа': 	return 7;	    
			case 'сентября': 	return 8;	    
			case 'октября': 	return 9;	    
			case 'ноября': 		return 10;	    
			case 'декабря': 	return 11;	  }
  else
		switch(month)
	  {
			case 0:   return 'январь';	    
			case 1:   return 'февраль';	    
			case 2:   return 'март';	    
			case 3:   return 'апрель';	    
			case 4:   return 'май';	    
			case 5:   return 'июнь';	    
			case 6:   return 'июль';	    
			case 7:   return 'август';	    
			case 8:   return 'сентябрь';	    
			case 9:   return 'октябрь';	    
			case 10:  return 'ноябрь';	    
			case 11:  return 'декабрь';	  }
}

export const checkTime = time => {
	return time >= 10 ? time : '0' + time;
}

export const getNormalDate = date => {
	let time = new Date(date);
	let now = new Date();
	if(time.setHours(0,0,0,0) === now.setHours(0,0,0,0)) 												return 'Сегодня'
	else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) - 24*60*60*1000))	return 'Вчера'
	else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) + 24*60*60*1000))	return 'Завтра'
	else
	return checkTime(time.getDate()) + ' ' + getMonthName(time.getMonth(), true) + (now.getFullYear() !== time.getFullYear() ? time.getFullYear() : ''); 
}

export const normalNumber = value => {
	let result = String(value)
	result = result.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')	
	return result
}
