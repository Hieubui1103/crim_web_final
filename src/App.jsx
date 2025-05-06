// NPR Clone - A simple React app mimicking the NPR website layout
import './App.css'

function App() {
  return (
    <div className="npr-clone-container">
      {/* Header */}
      <header style={{ background: 'linear-gradient(90deg, #c00 0%, #900 100%)', borderBottom: '1px solid #a00', padding: '32px 0', width: '100%' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box', width: '100%', padding: '0 24px' }}>
          <div style={{ fontWeight: 'bold', fontSize: 40, color: '#fff', letterSpacing: 2, paddingRight: "20px"}}>Crime Basis</div>
          <nav>
            <a href="#" style={{ margin: '0 12px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Home</a>
            
          
            <div style={{ display: 'inline-block', position: 'relative', margin: '0 12px' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Crime Types</a>
            </div>
            <a href="#" style={{ margin: '0 12px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>News & Analysis</a>
            <a href="#" style={{ margin: '0 12px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Data & Reports</a>
            <a href="#" style={{ margin: '0 12px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Podcasts / Videos</a>
            <a href="#" style={{ margin: '0 12px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>About / Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ width: '100%', maxWidth: 1500, margin: '32px auto', padding: '32px 0px', boxSizing: 'border-box' }}>
        {/* Article */}
        <article style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px #eee', maxWidth: 800, margin: '0 auto' , textAlign: 'left'}}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 ,textAlign: 'center' }}>Synthetic marijuana and mayhem: How Violence in Mexico Evolved from 2010</h1>
          <div style={{ color: '#888', fontSize: 14, marginBottom: 16 , textAlign: 'center'}}>By Hieu Bui | May 5, 2025</div>

          <section style={{ marginBottom: 24 }}>
            <p><i>Marijuana has been a crucial product in the drug trade in Mexico since the 20th century. With the falling of marijuana prices in the recent decade, how has Mexico endured the violence it has suffered from for almost a century?</i></p>
          </section>

          <h2>History</h2>
          <section style={{ marginBottom: 24 }}>
            <p>The drug-related violence has affected this Spanish-speaking country substantially. The trade of drugs, including marijuana and cannabis, has existed since ancient times. The criminalization of drug possession and trade has continued to the present day, with the 19th and 20th centuries having seen the common use of marijuana in Mexico, but predominantly for medical reasons. However, this started changing around the 1930s with the passing of the USA marijuana Tax Act, the production of this drug was massively increased, and by the 1970s, this business started involving violence as the drug-trafficking market grew dramatically in collaboration with the Colombian and Mexican cartels. [1]</p>
          </section>

          <h2>The falling of marijuana prices:</h2>
          <section style={{ marginBottom: 24 }}>
            <p>During 2010, cannabis was worth around $80 per kilogram at the border, which was a life-changing amount. [2]. However, by 2024, some farmers had been begging the cartels for the same product for only $20 per kilogram, a significant price decrease just after 14 years. The following is a detailed timeline of the downward trend of marijuana prices throughout the years starting from 2010:</p>
            <ol>
              <li>2014: it was $60 to $90 per kilo of marijuana, but now the farmers of pot in the Mexican State of Sinaloa were paid for only $30 to $40 per kilogram of the same cannabis, as the US continued to legalize the use of pot. [3]</li>
              <li>7/2014: “Golden Triangle” region of Mexico’s Sinaloa state collapsed, as the wholesale prices plummeted from $100 to $25 per kilogram of marijuana. [4]</li>
              <li>2015-2018: Further south in Mexico’s Guerrero state, the price for marijuana has dropped even lower, to around $17 a kilo, according to the Associated Press[5].</li>
            </ol>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
               <img src="crim\Picture1.png" alt="Mexican Farm-gate Marijuana Price (2010-2024)" />
              <p style={{ textAlign: 'center' }}><b>Figure 0:</b> <i>Mexican Farm-gate Marijuana Price (2010-2024)</i></p>
            </div>
          </section>

          <h2>Violence trends</h2>
          <section style={{ marginBottom: 24 }}>
            <p>How does this marijuana trend of price prompt the increasing violence in Mexico? First of all, a report from the National System of Public Security data for Mexico [6] shows that there were 18 intentional homicides per 100,000 population in 2010. These data vary through the states, with most of them being drug-related, such as 73% in Sinaloa and about %70% in both Guerrero and Durango. (<b>Figure 1</b>)</p>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\Picture2.jpg" alt="Map of murder rate, 2010." />
              <p style={{ textAlign: 'center' }}><b>Figure 1:</b> <i>Map of murder rate, 2010. Credit: Tony Burton / Geo-Mexico.</i></p>
            </div>
            <p>Violence related to drugs regains as, according to the Global Initiative[7], in 2017, this kind of violence comprised around 24 out of 100,000 cases of murders, with 29000 victims dying from murder, rising significantly above the 2011 crime peaks. And by 2018, this number had peaked at 29 over 100,000 cases of homicides. Analysts estimate that around 50-75% of those killings were organised-crime-related, largely linked to drug-trafficking groups.</p>
            <p>Although these numbers are mostly drug-related, they usually happen in hot-spot states such as Guerrero, Michoacan, Chihuahua, or Sinaloa - places having major cannabis cultivation. As shown in the following tables, these states have around 1200 -1600 homicides reported, while it was around 2000 homicides in Guerrero, with over 70% of those murders being drug-related. (<b>Figure 2</b>): [8]</p>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\Picture3.jpg" alt="Homicide comparisons by state" />
              <p style={{ textAlign: 'center' }}><b>Figure 2:</b> <i>Homicide comparisons by state, documented by the National Security Commission and Latina Consultores</i></p>
            </div>
            <p>As US legalization crushed cannabis prices, as mentioned above, cartels sought new suitable targets such as synthetic marijuana. While capable guardians, such as local police, were outgunned. The marijuana profits implicitly migrate from cannabis routes to synthetic-drug corridors and mining towns, which contributes to the increasing trend of drug-related crime and war, mostly for the money of the new product. Routine Activity: The violence just did not go away with the price - it switched and found its new victims, motivated offenders who want to get rich through marijuana or other drug-related crimes. The new profits from synthetic marijuana these cartels and criminal organizations get help them militarize, which helps them out-gun the Mexican police forces and significantly pose a threat to their people.</p>
          </section>

          <h2>Cartel adaptation</h2>
          <section style={{ marginBottom: 24 }}>
            <p>How does the cartel adapt to this situation? As we have mentioned above, their transition to synthetic cannabis has started over a long period. Study by the DEA [9] in 2024 National Drug Threat Assessment shows that the shift from plant-based drugs such as marijuana to synthetic and chemical-based drugs, has resulted in the most dangerous and deadly drug crisis the US has ever faced, due to the crisis that DEA is tracking in Mexico’s states Sinaloa and Jalisco. The SEDENA (Mexican Secretariat of National Defense) reports that 1658 clandestine labs have been dismantled between 2019 and 2023, with 527 alone-mostly in Sinaloa, Durango, and Michoacan, the mountain zones that once grew cannabis.[10]</p>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\image12.png" alt="The Army dismantled drug labs and seized more than 100 kg of methamphetamine in Durango and Sinaloa" />
              <p style={{ textAlign: 'center' }}><b>Figure 3:</b> <i>The Army dismantled drug labs and seized more than 100 kg of methamphetamine in Durango and Sinaloa.</i></p>
            </div>
            <p>These labs can replace the earnings of hundreds of marijuana fields, with each one requiring arm protection. These military supports all come from crime organization fundings, which push homicide hot-spots into new cities and areas, as more and more cartels split out due to the profits and having their firepower. On the other hand, cartels did not abandon their marijuana entirely; they moved up the value chain. A 2023 USTR filing notes that Mexican TCOs “produce and traffic THC oil” for the U.S. vape cartridges. The DEA tallied 192 butane‑hash‑oil (BHO) extraction labs seized in the United States in 2019 , several linked to cartel supply chains[11]. Explosions and robberies around these labs represent a new violence modality tied to cannabis concentrates. Lastly, marijuana’s price crash removed one lucrative target, but lab precursors, THC-oil plants, and extortion victims created new ones. Moreover, cartels remain the motivated offenders - they will do anything to make sure they keep up with the most potential and profitable approach, which includes every crime one can think of, even to the point of out-gunning the police. Violence migrates from one to another.</p>
          </section>

          <h2>State response: Militarisation without deterrence</h2>
          <section style={{ marginBottom: 24 }}>
            <p>How do the states and the Mexican government address this new kind of violence? In 2006, President Felipe Calderon started a surge with around 85,000 soldiers into anti-drug operations. By 2023, President Lopez Obrador, who campaigned on “abrazos, no balazos” (“hugs, not bullets”), had around 261,600 military personnel performing public security duties, 76% more than that of Calderon’s. [12][13]</p>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\Picture6.png" alt="The militarization of Public Security in Mexico" />
              <p style={{ textAlign: 'center' }}><b>Figure 4:</b> <i>The militarization of Public Security in Mexico (source: [12])</i></p>
            </div>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\Picture11.png" alt="" />
              <p style={{ textAlign: 'center' }}><b>Figure 5:</b> <i>Graphic: military personnel deployed in public security activities and operational force status of state and municipal police. Sources: Access to information requests: National Guard 2800100042720 and 2800100004521, Annual Activities Report 2022; SEDENA 0000700116321 and 330026423000879; SEMAR 00001300080321; SESNSP 330027622000089. Government of Mexico: Annual Security Report 2020, Monthly Security Report December 2021, and Security Report August 2023. [13]</i></p>
            </div>
            <p>In June 2019, the National Guard of Mexico joined forces with 60,000 troops and grew to 133,000 troops by 2024. However, this response to organized crime has not yet been effective, as critics called this approach “civilianization in reverse”, as the homicide records still stayed near the record levels during the build-up duration. [14][15]</p>
            <p>Between December 2018 and April 2023, the army uprooted 8781 hectares of marijuana—roughly 12,000 soccer fields—while Navy units seized 29 tons of bulk cannabis in just the first four months of 2023.[16] On the synthetic front, freedom‑of‑information data obtained by Reuters show that 89 % of those facilities were already inactive when soldiers arrived.[17] In short, flashy eradication and raid tallies look impressive at morning press briefings but do little to choke off cartel profits or the violence that guards them.</p>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\Picture8.jpg" alt="President Andrés Manuel López Obrador" />
              <p style={{ textAlign: 'center' }}><i>Photo: President Andrés Manuel López Obrador</i></p>
            </div>
            <p>From the government’s viewpoint, enhancing the forces to face off the militarism of the crime organization could help bring peace back, but in the end, it causes more violence than ever. The baseline of homicides is only 35% higher than that of 2010.[18] The Amnesty International organization warns that turning soldiers into street police merely facilitates human-rights violations instead of addressing the root of the problem: the cannabis trade and related crimes[19]. This led to lethal violence remaining stubbornly high, despite classic deterrence theory stating that crime should fall when punishment becomes more certain and severe.</p>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\Picture9.jpg" alt="Mexican soldiers patrol the streets" />
              <p style={{ textAlign: 'center' }}><i>Photo: © Marco Rodríguez / Eyepix Group/Future Publishing via Getty Images</i></p>
            </div>
            <p>This inversion of the theory suggested that larger government troops just increase with cartel revenue, with the violence, again, merely migrating from solely brick-weed to meth labs and synthetic marijuana. If we have to say this situation in Routine-Activity terms, the state removes one lucrative target (marijuana fields) but leaves a new one (synthetic cannabis). Without parallel investments in investigation, justice, and people’s lives will risk falling even more than before, as militarisation fuels impunity rather than reducing harm.</p>
          </section>

          <h2>Life under outbreaks of violence</h2>
          <section style={{ marginBottom: 24 }}>
            <p>I definitely would not survive the severe acts of violence that the transition from marijuana to synthetic cannabis involves. It is just really painful to see innocent people suffering from something they don’t even have business with. Some of them have to move out of their places, such as in 2020, 262,411 Mexicans were forced to move out of their homes as the fights between officials and cartels raged. Some places like Guerrero’s mountain villages are now empty after massive drone-dropped explosives, as families leave at night toward coastal towns where it is safer, leaving everything they have behind for their lives. [20]</p>
            <p>Moreover, with marijuana profits gone, cartels “tax” daily life. Registered extortion victims jumped from 6,895 (2018) to 10,971 (2023), a 60 % surge even as homicides plateaued. [21] Lime growers in Michoacán must pay up to 2,000 pesos (≈ US$ $118) per tonne—or watch gunmen torch their groves; prices at Mexico City markets spike accordingly.[22]</p>
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <img src="crim\Picture10.png" alt="Lime farmers say those who refuse to pay have been attacked by cartels" />
              <p style={{ textAlign: 'center' }}><i>Lime farmers say those who refuse to pay have been attacked by cartels. (Juan José Estrada Serafín/Cuartoscuro)</i></p>
            </div>
            <p>Tortilla shops, ambulance drivers, and even schoolteachers now add the cartel “piso” to their cost of doing business, fuelling food inflation that Mexico’s central bank can barely afford. [23]</p>
            <p>These extortions force some people or places to arm themselves to avoid these unfair fees. However, even with arms, you can still possibly die, just as to show how violence cannot simply be solved through weaponization. The 2013 “autodefensa” was an example. The trend has been doing well, until 2023 when its iconic founder, lime‑farmer Hipólito Mora, was ambushed and killed alongside three bodyguards in La Ruana, Michoacán.[24]  His murder, followed by the slaying of other vigilante leaders, signals how civilian militias, once lauded as community guardians, have been infiltrated or out‑gunned by the very cartels they rose against, just like the police force in the beginning.</p>
            <p>The violence even gets worse. It ripples into education:  in January 2025, bishops reported that Tecpan de Galeana and two neighboring Guerrero municipalities had suspended all classes after a week of shoot‑outs that left a dozen dead.[25] Teachers have walked out in Acapulco and Chilpancingo after extortion demands for half their salaries.</p>
            <p>These data showcase that just because you don’t use marijuana does not mean that you are not capable or do not have yourself acknowledged of those. Besides the medical reasons, these unrelated businesses indirectly put pressure on the people. In addition to the worsening and unstable safety, Mexican civilians are now afraid to go outside, afraid to start a business, even afraid to go to school or go to work. This could potentially bring the economy to its knees, as money is being spent on wars and forces rather than people’s living support, while part of the legal market and vendors' revenues fall into the hands of the cartels. Well, you would ask, we understand what Mexico is suffering, then how do these threats apply to us? As tourists, you probably will not be travelling to dangerous places, but extortion of tourists could happen, even in Mexico City. Or you might find the shops being overcostly - the aftermath of the extortion fee.</p>
            <p>In the end, falling cannabis prices did not deliver peace at all at first glance, they shifted the bill of the cartels to civilians through flights, racketeers, vigilante risk, and the inability to keep schools open.</p>
          </section>

          <h2>Criminology lens</h2>
          <section style={{ marginBottom: 24 }}>
            <p><i>This section is more academically used, so feel free to skip it if you want to.</i></p>
            <p>As we have been mentioning from above, routine-activity theory by Cohen & Felson (1979) has been the main topic. This theory states that a crime spike needs only three ingredients: motivated offenders, suitable targets, and a lack of capable guardians. When U.S. legalization gutted brick‑weed profits, Mexico’s trafficking groups did not disappear; they pivoted to synthetic cannabis, THC‑oil extraction plants, and rural extortion—new, high‑margin targets. Meanwhile, municipal police forces remained out‑gunned, and the National Guard concentrated on highways, not villages. Therefore, the homicide clusters migrated from cannabis zones to synthetic corridors (see Guerrero → Zacatecas heat‑map in Section 2).</p>
            <p>Moreover, we also observe in action the Social Disorganization Theory, by Shaw & McKay (1942). Violence concentrates where community supervision erodes. Eradication campaigns and drone‑bomb attacks forced over 260,000 internal displacements (Section 6). Empty villages lose schools, churches, and local political structures—the very institutions that normally restrain crime. In Guerrero’s mountains, teachers abandoned classrooms for months after extortion threats; homicide rates there tripled the national average. The theory explains why violence stays sticky in places hollowed out by out‑migration and fear.</p>
            <p>Last but not least, the Deterrence Theory predicts that crime will fall when punishment becomes certain and severe. As I mentioned above, this theory certainly does not apply after all. Mexico nearly tripled troop deployments (Section 4), yet national homicide rates hovered around 29 for over 100,000 for four straight years and only slipped to 24.5 in 2023—still 35 % above 2010. FOI data show that 89 % of “dismantled” drug labs were already abandoned, undercutting the certainty of punishment. Severity without certainty equals symbolic deterrence—a show of force that changes headlines more than behaviour.</p>
            <p>These lenses ultimately show a feedback loop: lack of social norms conditions and social disorganization supply the cartels, who have already corrupted the countries. With the falling of cannabis prices, this pushes them toward new targets: innocent civilians, while government enforcement fails to insert effective guardians. As a result, the system resets at a higher concentration of violence than ever before.</p>
          </section>

          <h2>Conclusion:</h2>
          <section style={{ marginBottom: 24 }}>
            <p>Between 2010 and 2025, the farm‑gate price of Mexican marijuana fell by roughly 75 %, yet lethal violence climbed, because the profit vacuum was filled—first by synthetic cannabis “super‑labs,” then by wholesale extortion of civilians, shopkeepers, and even teachers. Military deployments tripled and a new National Guard was created, but homicides stayed near record highs, showing that force without justice or development cannot deter diversified cartels. Durable relief will come only when rural economies gain legal revenue streams and local policing, investigative, not militarised, becomes both credible and fair.</p>
          </section>

          <h2>Bibliography</h2>
          <section style={{ fontSize: 14 }}>
            <ol>
              <li>Puyana, J. C., Puyana, J. C. J., Rubiano, A. M., Montenegro, J. H., Estebanez, G. O., Sánchez, A. I., & Vega Rivera, F. (2017). Drugs, violence, and trauma in Mexico and the USA. Medical Principles and Practice, 26(4), 309–315. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5768117/" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>RAND Corporation. (2010). Reducing drug trafficking revenues and violence in Mexico and Central America (Occasional Paper OP 325). <a href="https://www.rand.org/content/dam/rand/pubs/occasional_papers/2010/RAND_OP325.pdf" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>RAND Corporation. (2010). Appendix on marijuana prices (Data tables in OP 325). <a href="https://www.rand.org/content/dam/rand/pubs/occasional_papers/2010/RAND_OP325.pdf" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Tico Times Staff. (2014, April 7). Former pot growers fueling the US heroin invasion. <a href="https://ticotimes.net/2014/04/07/former-pot-growers-fueling-the-us-heroin-invasion" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Gurney, K. (2015, February 11). Mexico poppy production feeds growing US heroin demand. InSight Crime. <a href="https://insightcrime.org/news/analysis/mexico-poppy-production-feeds-growing-us-heroin-demand" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Burton, T. (2011, September 1). How do the rates of intentional homicide differ across Mexico? Geo Mexico. <a href="https://geo-mexico.com/?p=4854" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Institute for Economics & Peace. (2018). Mexico Peace Index 2018: Measuring peace in Mexico. <a href="https://globalinitiative.net/wp-content/uploads/2018/04/Mexico-Peace-Index-2018-Institute-for-Economics-and-Peace-2018.pdf" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Dittmar, V. (2018, January 26). 2017: Deadliest year for organized crime related homicides in Mexico. InSight Crime. <a href="https://insightcrime.org/news/2017-deadliest-year-organized-crime-related-homicides-mexico" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Drug Enforcement Administration. (2024, May 9). DEA releases 2024 National Drug Threat Assessment. <a href="https://www.dea.gov/press-releases/2024/05/09/dea-releases-2024-national-drug-threat-assessment" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Infobae Staff. (2023, December 21). De 527 narcolaboratorios que Sedena incautó, solo 24 estaban activos. Infobae. <a href="https://www.infobae.com/mexico/2023/12/21/de-527-narcolaboratorios-que-sedena-incauto-solo-24-estaban-activos/" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Office of the United States Trade Representative. (2023). Facing Fentanyl 301 Petition (Part 10, Exhibits 77 – 102). <a href="https://ustr.gov/sites/default/files/Facing%20Fentanyl%20301%20Petition_Part10_%28Ex.%2077%20cont.%20-%20Ex.%20102%29.pdf" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Wilson Center. (2022). Infographic: The militarization of public security in Mexico. <a href="https://www.wilsoncenter.org/microsite/8/node/111379" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>López Portillo, E. (2023, September 10). Mexico now deploys more soldiers than police in public security. Schools for Chiapas. <a href="https://schoolsforchiapas.org/mexico-now-deploys-more-soldiers-than-police-in-public-security" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Wikipedia contributors. (n.d.). National Guard (Mexico). In Wikipedia. Retrieved May 5, 2025, from <a href="https://en.wikipedia.org/wiki/National_Guard_(Mexico)" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Associated Press. (2024, September 25). Mexico Congress places National Guard under military command. <a href="https://apnews.com/article/mexico-congress-national-guard-military-b31ab1b6aa165f87012fb93845922b9a" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Presidencia de México. (2023, April 18). Presidente convoca a padres de familia a prevenir consumo de drogas; Sedena reporta aseguramientos y destrucción de plantíos. <a href="https://amlo.presidente.gob.mx/presidente-convoca-a-padres-de-familia-a-prevenir-consumo-de-drogas-sedena-reporta-aseguramientos-de-drogas" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Jorgic, D. (2023, December 21). Under US pressure over fentanyl, Mexico wages “imaginary war on drugs” with raids on inactive labs. Reuters. <a href="https://www.reuters.com/world/americas/under-us-pressure-over-fentanyl-mexico-wages-imaginary-war-drugs-with-raids-2023-12-21" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Associated Press. (2023, January 11). Mexico’s president says violence down, critics disagree. <a href="https://apnews.com/article/mexico-violence-drug-cartels-president-speech-003062431615de4114403f3fe3bbcb76" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Amnesty International. (2022, September 9). Mexico: Militarizing public security will lead to more human rights violations and perpetuate impunity. <a href="https://www.amnesty.org/en/latest/news/2022/09/mexico-militarizing-public-security-human-rights-violations-impunity" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Joint Data Center on Forced Displacement. (2024, May). Internal displacement in Mexico: Why including internally displaced persons in national statistics is necessary to inform a protection based response [Policy note]. <a href="https://www.jointdatacenter.org/wp-content/uploads/2024/05/Internal-Displacement-in-Mexico.pdf" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Graham, D. (2024, January 25). Rampant extortion reveals “corrosive” hole in Mexico security strategy. Reuters. <a href="https://www.reuters.com/world/americas/rampant-extortion-reveals-corrosive-hole-mexico-security-strategy-2024-01-25" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Mexico News Daily Staff. (2023, August 25). Extortion of lime farmers in Michoacán causes prices to spike. Mexico News Daily. <a href="https://mexiconewsdaily.com/news/extortion-of-lime-farmers-in-michoacan-causes-prices-to-spike" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Reuters. (2024, August 27). Mexico’s central bank battles hidden inflation driver: Cartel extortion. <a href="https://www.reuters.com/markets/mexico-central-bank-has-growing-inflation-challenge-extortion-2024-08-27" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Associated Press. (2023, June 29). Mexican vigilante leader Hipólito Mora killed in cartel ambush. <a href="https://apnews.com/article/mexico-activist-killed-drug-cartel-bf8cd1c5daf3b84b53d89a45ac2fdfb5" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>Associated Press. (2025, January 22). Violence forces Guerrero municipalities to shut schools, bishops say. <a href="https://apnews.com/article/mexico-violence-catholic-bishops-guerrero-e7625f58d2c9806ec61caa78843f2e15" target="_blank" rel="noopener noreferrer">link</a></li>
            </ol>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer style={{ background: '#222', color: '#fff', padding: '32px 0', marginTop: 32, display: 'flex', justifyContent: 'space-between'}}>
        <div style={{textAlign: 'left', padding: '0 20px'}}>© {new Date().getFullYear()} Crim Basis. All Rights Reserved</div>
        <div style={{textAlign: 'right', padding: '0 20px'}}>Hieu Bui @2025 </div>
      </footer>
    </div>
  );
}

export default App
