import React, {useEffect} from "react";
import { getAchivement, Achivement } from "../../application/useCases";

export const Achievement = () => {
	const [achivement, setAchivement] = React.useState<Achivement|null>(null);

	useEffect(() => {
		getAchivement().then((achive) => {
			setAchivement(achive);
		});
	}, []);

	if(!achivement){
		return <div>loading...</div>
	}
	return(
		<div>
			<span>{achivement.date}</span>
			<span>{achivement.percentile} %</span>
		</div>
	)
}