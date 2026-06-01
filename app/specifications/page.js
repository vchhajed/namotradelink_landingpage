import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Product Specifications – Namo Tradelink' };

const th = { background: '#1a2a4a', color: '#fff', padding: '8px 10px', fontSize: 12, fontWeight: 700, textAlign: 'center', whiteSpace: 'nowrap', border: '1px solid #2d3f5a' };
const td = { padding: '6px 10px', fontSize: 12, textAlign: 'center', border: '1px solid #dde4ee', color: '#374151' };
const tdDim = { ...td, background: '#e87722', color: '#fff', fontWeight: 700, textAlign: 'left' };

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1a2a4a', margin: '40px 0 4px', borderLeft: '4px solid #e87722', paddingLeft: 14 }}>
      {children}
    </h2>
  );
}

function SubTitle({ children }) {
  return <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e87722', margin: '24px 0 10px' }}>{children}</h3>;
}

function TableWrap({ children }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32, borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', border: '1px solid #dde4ee' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 480 }}>
        {children}
      </table>
    </div>
  );
}

export default function SpecificationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 60 }}>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #0d1b30 0%, #1a2a4a 100%)', padding: '56px 24px 48px', textAlign: 'center' }}>
          <span style={{ background: '#e87722', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 99, display: 'inline-block', marginBottom: 16 }}>Technical Data</span>
          <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 900, margin: '0 0 12px', letterSpacing: '-0.02em' }}>Product Specifications</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, maxWidth: 640, margin: '0 auto' }}>
            Weight charts and dimension tables for our full range of steel products. All weights are indicative — confirm before placing order.
          </p>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 20px' }}>

          {/* Standards note */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', marginBottom: 36, border: '1px solid #e2e8f0', fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>
            <strong style={{ color: '#1a2a4a' }}>Standards:</strong> These tubes &amp; hollow sections are made from steel satisfying Indian and international standards. Products comply with IS, ASTM, BSEN, EN, DIN, API and other guiding publications. Namo Tradelink has a dynamic product portfolio that keeps evolving to accommodate newer requirements.
          </div>

          {/* ── Round Tubes Hot Rolled ── */}
          <SectionTitle>Round Tubes – Hot Rolled (NB Series)</SectionTitle>
          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 12 }}>Nominal Weight (Kg / 6 Mtr.) by Thickness (MM)</p>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>MM</th>
                <th style={th}>Inch</th>
                <th style={th}>OD (MM)</th>
                {['1','1.2','1.4','1.6','2','2.6','3.2','3.6','4','4.5','5','6','8'].map(t => <th key={t} style={th}>{t}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                [15,'1/2"',21.3,'','','2.5','3.4','4.2','4.8','5.6','7.5','9','','','',''],
                [20,'3/4"',26.4,'','2.8','','4.6','5.2','6','8','9.5','11','','','',''],
                [25,'1"',33.7,'3','3.7','4.6','5.5','6.5','7.4','9.5','12','14','17','','',''],
                [32,'1.25"',42.4,'5','6','7','','8.5','9.6','12','15','18','21','','',''],
                [40,'1.5"',48.3,'6','7','','8.5','12','15','18','20','25','','','',''],
                [50,'2"',58.3,'9.5','11','13','15','18','22','26','32','35','39','43','49',''],
                [65,'2.5"',76.2,'','14','16','18','22','27','33','39','43','48','52','60',''],
                [80,'3"',88.8,'','','22','27','34','39','47','52','57','62','72','',''],
                [100,'4"',114.3,'','','30','32','42','50','58','66','72','80','','',''],
                [125,'5"',140,'','','42','52','62','72','80','','105','100','','',''],
                [150,'6"',165,'','','52','62','76','','','90','118','','','',''],
                [200,'8"',219,'','','85','97','115','128','145','160','185','200','','',''],
                [250,'10"',273,'','','','','','','','','200','240','300','',''],
                [300,'12"',323,'','','','','','','','','240','275','366','',''],
                [350,'14"',356,'','','','','','','','','285','366','407','',''],
                [400,'16"',406,'','','','','','','','','','','','470',''],
                [500,'20"',508,'','','','','','','','','','','','582',''],
                [600,'24"',610,'','','','','','','','','','','','','702'],
              ].map(([mm,inch,od,...vals],i) => (
                <tr key={mm} style={{ background: i%2===0?'#fff':'#f8fafc' }}>
                  <td style={tdDim}>{mm}</td>
                  <td style={{...td,color:'#64748b'}}>{inch}</td>
                  <td style={{...td,fontWeight:600}}>{od}</td>
                  {vals.map((v,j)=><td key={j} style={td}>{v||'–'}</td>)}
                </tr>
              ))}
            </tbody>
          </TableWrap>

          {/* ── Square & Rectangular Hollow Sections ── */}
          <SectionTitle>Square &amp; Rectangular Hollow Sections – Hot Rolled</SectionTitle>
          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 12 }}>Nominal Weight (Kg / 6 Mtr.) by Thickness (MM)</p>

          <SubTitle>Standard Dimensions</SubTitle>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>Dim (MM)</th>
                {['0.6','0.8','1','1.2','1.4','1.6','2','2.2','2.6','3.2','3.6','4','4.5','5','6'].map(t=><th key={t} style={th}>{t}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['10x10','','','','2.0','','','','','','','','','','',''],
                ['12x12','','','2.3','2.8','3.3','3.7','','','','','','','','',''],
                ['15x15','','','2.8','3.3','4','4.5','','','','','','','','',''],
                ['20x20','2.1','2.9','3.7','4.6','','5.8','8','9','10','','','','','',''],
                ['25x25','3','3.8','4.5','5.5','6.5','7.4','9','10','12','14','17','','','',''],
                ['26x13','','','4','5','','6','','','','','','','','',''],
                ['30x30','','','5.5','6.5','7.5','8.5','11','','13','16','','','','',''],
                ['30x20','','','5.5','6.5','7.4','','9','','','','','','','',''],
                ['32x32','','','6','7','8.5','9.5','12','','15','18','','','','',''],
                ['38x38','','6','7','8.5','','12','14','16','17','20','24','27','32','',''],
                ['40x10','','','','5.5','6.5','7.4','9','','13','16','','','','',''],
                ['40x20','','','','6.5','7.5','8.5','11','','13','16','','','','',''],
                ['40x25','','','','7','8.5','9.5','12','','15','18','','','','',''],
                ['40x40','','','','','','12','15','16','18','20','25','28','32','',''],
                ['50x50','','','10','12','','15','18','20','23','26','32','36','39','45','50'],
                ['60x60','','','','16','18','','22','25','28','32','39','43','48','53','60'],
                ['50x10','','','','6.5','7.5','8.5','11','','13','16','','','','',''],
                ['50x15','','','','7','8.5','9.5','12','','','','','','','',''],
                ['50x25','5','6','7','8.5','','12','14','15','17','20','24','','','',''],
                ['50x30','','','','9','','12','15','','','','','','','',''],
                ['60x30','','','','11','','14','17','19','22','','','','','',''],
                ['60x40','','','','12','','15','18','20','23','26','32','36','39','',''],
                ['66x33','','','','12','','15','18','20','23','26','32','36','39','',''],
                ['75x25','','','','12','','15','18','20','23','26','32','36','39','',''],
                ['75x35','','','','','17','','21','','27','','','','','',''],
                ['75x50','','','','','19','23','','','30','','','','','',''],
                ['80x40','','','14','16','18','','22','25','28','32','39','43','48','53','60'],
                ['95x25','','','14','16','18','','22','','28','','','','','',''],
              ].map(([dim,...vals],i)=>(
                <tr key={dim} style={{ background: i%2===0?'#fff':'#f8fafc' }}>
                  <td style={tdDim}>{dim}</td>
                  {vals.map((v,j)=><td key={j} style={td}>{v||'–'}</td>)}
                </tr>
              ))}
            </tbody>
          </TableWrap>

          <SubTitle>Large Dimensions</SubTitle>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>Dim (MM)</th>
                {['1.6','2','2.5','3','3.6','4','4.5','5','6','8'].map(t=><th key={t} style={th}>{t}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['72x72','22','27','34','39','48','52','58','62','72',''],
                ['80x80','26','30','38','44','51','57','63','72','85',''],
                ['91x91','30','34','43','49','58','66','72','80','94',''],
                ['100x100','33','38','47','56','64','72','80','90','108','135'],
                ['113x113','','42','52','62','72','80','90','100','115','155'],
                ['120x120','','44','55','65','77','86','96','108','125',''],
                ['132x132','','','','75','','102','115','125','145','190'],
                ['96x48','22','26','34','39','48','52','58','62','72',''],
                ['100x50','23','28','35','40','49','53','59','63','75',''],
                ['100x60','','30','38','44','51','57','63','72','',''],
                ['122x61','30','34','43','49','58','66','72','80','94',''],
                ['125x75','33','38','47','56','64','72','80','90','108','135'],
                ['145x82','','42','52','62','72','80','90','100','115','155'],
                ['150x50','','38','47','56','64','72','80','90','108','135'],
                ['150x75','','42','52','62','72','80','90','100','115','155'],
                ['150x100','','45','67','','80','90','100','110','135','8'],
              ].map(([dim,...vals],i)=>(
                <tr key={dim} style={{ background: i%2===0?'#fff':'#f8fafc' }}>
                  <td style={tdDim}>{dim}</td>
                  {vals.map((v,j)=><td key={j} style={td}>{v||'–'}</td>)}
                </tr>
              ))}
            </tbody>
          </TableWrap>

          <SubTitle>Extra Large Dimensions</SubTitle>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>Dim (MM)</th>
                {['2.5','3','4','5','6','8','10','12'].map(t=><th key={t} style={th}>{t}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['140x140','','76','101','126','151','202','239','290'],
                ['150x150','68','81','108','135','162','216','257','311'],
                ['180x180','','97','130','162','194','259','308','373'],
                ['200x200','','','144','180','216','288','342','414'],
                ['220x220','','','158','198','238','317','376','455'],
                ['250x250','','','180','225','270','360','428','518'],
                ['300x300','','','216','270','324','432','513','621'],
                ['200x100','','81','108','135','162','216','257','311'],
                ['200x150','','','126','158','189','252','299','362'],
                ['220x140','','','130','162','194','259','309','373'],
                ['240x120','','97','130','162','194','259','309','373'],
                ['250x150','','','144','180','216','288','342','414'],
                ['250x250','','','180','225','270','360','428','518'],
                ['300x150','','','162','203','243','324','385','466'],
                ['300x200','','','180','225','270','360','128','518'],
                ['400x200','','','216','270','324','432','513','621'],
              ].map(([dim,...vals],i)=>(
                <tr key={i} style={{ background: i%2===0?'#fff':'#f8fafc' }}>
                  <td style={tdDim}>{dim}</td>
                  {vals.map((v,j)=><td key={j} style={td}>{v||'–'}</td>)}
                </tr>
              ))}
            </tbody>
          </TableWrap>

          {/* ── Structural Steel ── */}
          <SectionTitle>Structural Steel</SectionTitle>
          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16 }}>
            Manufactured by hot rolling of MS billets and castings. Cold rolled plates are formed by cold rolling of hot rolled steel, reducing tolerances and increasing formability. Sourced from reputed manufacturers as per industry standards.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
            {/* I Beam */}
            <div>
              <SubTitle>I Beam – ISMB (Kg/Mtr.)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Dim L×B (MM)</th><th style={th}>Wt. Kg/Mtr.</th></tr></thead>
                <tbody>
                  {[['100x50L',5.3],['100x50',8],['120x65L',8.3],['125x65',13.2],['150x75',15.8],['175x85',19.5],['200x100',25],['250x125',38],['300x140',48.5],['400x140',64.1],['450x150',73],['500x180',87.7],['600x210',122.5]].map(([d,w],i)=>(
                    <tr key={d} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{d}</td><td style={td}>{w}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>

            {/* Channel */}
            <div>
              <SubTitle>Channel – ISMC (Kg/Mtr.)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Dim L×B (MM)</th><th style={th}>Wt. Kg/Mtr.</th></tr></thead>
                <tbody>
                  {[['70x35',3.7],['75x40L',5],['75x40H',5.8],['95x45L',6],['100x50H',9],['125x65',13.1],['150x75',16.8],['175x75',19.6],['200x75',22.6],['250x85',33.3],['300x90',38.3],['400x100',50.3]].map(([d,w],i)=>(
                    <tr key={d} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{d}</td><td style={td}>{w}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>

            {/* Rounds */}
            <div>
              <SubTitle>Rounds (Kg/Mtr.)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Dim (MM)</th><th style={th}>Wt. Kg/Mtr.</th></tr></thead>
                <tbody>
                  {[[8,0.4],[10,0.6],[12,0.9],[16,1.6],[20,2.3],[25,4],[32,6.3],[36,7.5],[40,9.9],[50,16.3]].map(([d,w],i)=>(
                    <tr key={d} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{d}</td><td style={td}>{w}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>

            {/* Square */}
            <div>
              <SubTitle>Square (Kg/Mtr.)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Dim (MM)</th><th style={th}>Wt. Kg/Mtr.</th></tr></thead>
                <tbody>
                  {[[8,0.5],[9,0.6],[10,0.7],[12,1.1],[16,2.0],[20,3.0],[25,4.7],[32,8.7],[40,12.5],[50,18.1]].map(([d,w],i)=>(
                    <tr key={d} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{d}</td><td style={td}>{w}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>
          </div>

          {/* Special Sections */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
            <div>
              <SubTitle>Special Sections (Kg/Mtr.)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Dim (MM)</th><th style={th}>Wt. Kg/Mtr.</th></tr></thead>
                <tbody>
                  {[['T 60x40',3.6],['T 50x50x6',4.8],['T 40x40x6',3.5],['T 20 MM',0.9],['T 25 MM',1.15],['Gate Ch. 20',0.6],['Mullyam',2.45],['Z Angle L',1.25],['Z Angle H',1.45]].map(([d,w],i)=>(
                    <tr key={d} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{d}</td><td style={td}>{w}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>

            {/* Chequered Plates */}
            <div>
              <SubTitle>Chequered Plates (Wt. Kgs/Piece)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Thickness</th><th style={th}>1250x2500</th><th style={th}>1250x5000</th></tr></thead>
                <tbody>
                  {[['3',75,150],['4',105,210],['5',130,260],['6',155,310],['8',205,410]].map(([t,a,b],i)=>(
                    <tr key={t} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{t}</td><td style={td}>{a}</td><td style={td}>{b}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>

            {/* G.P Sheet */}
            <div>
              <SubTitle>G.P Sheet (Wt. Kgs/Piece)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Thickness</th><th style={th}>8x3</th><th style={th}>8x4</th></tr></thead>
                <tbody>
                  {[['0.8',13.5,19],['0.9',15.2,21.1],['1',18.0,25.0],['1.2',22.0,30.0],['1.5',29.0,35.2]].map(([t,a,b],i)=>(
                    <tr key={t} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{t}</td><td style={td}>{a}</td><td style={td}>{b}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>
          </div>

          {/* Hot Rolled Plates */}
          <SubTitle>Hot Rolled Plates (Wt. Kgs/Piece)</SubTitle>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>Thickness</th>
                <th style={th}>1250x2500</th>
                <th style={th}>1250x5000</th>
                <th style={th}>1500x6300</th>
              </tr>
            </thead>
            <tbody>
              {[['1.6',40,80,''],['2',50,104,''],['2.5',62,125,''],['3',72,145,225],['4',100,200,300],['5',125,250,380],['6',150,300,450],['8',200,400,600],['10',250,500,750],['12',300,600,900],['16',400,800,1200],['20',500,1000,1500],['25',625,1250,189]].map(([t,a,b,c],i)=>(
                <tr key={t} style={{background:i%2===0?'#fff':'#f8fafc'}}>
                  <td style={tdDim}>{t}</td><td style={td}>{a}</td><td style={td}>{b||'–'}</td><td style={td}>{c||'–'}</td>
                </tr>
              ))}
            </tbody>
          </TableWrap>

          {/* Cold Rolled Sheet */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            <div>
              <SubTitle>Cold Rolled Sheet (Wt. Kgs/Piece)</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Thickness</th><th style={th}>6x3</th><th style={th}>6x4</th><th style={th}>8x3</th><th style={th}>8x4</th></tr></thead>
                <tbody>
                  {[['0.8',10,13.5,13.5,19],['0.9',11,15.2,15.2,21.1],['1',12.2,16.9,18.0,25.0],['1.2',14.6,16.9,22.0,30.0],['1.5',18.2,25.3,29.0,35.2]].map(([t,a,b,c,d],i)=>(
                    <tr key={t} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{t}</td><td style={td}>{a}</td><td style={td}>{b}</td><td style={td}>{c}</td><td style={td}>{d}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>

            <div>
              <SubTitle>Super Lite Equal Angle</SubTitle>
              <TableWrap>
                <thead><tr><th style={th}>Thickness</th><th style={th}>Wt./Kg Per Pc.</th></tr></thead>
                <tbody>
                  {[['14',1.5],['23',2.0],['24',2.3],['25',2.5],['32',3.3],['42',4.5]].map(([t,w],i)=>(
                    <tr key={t} style={{background:i%2===0?'#fff':'#f8fafc'}}><td style={tdDim}>{t}</td><td style={td}>{w}</td></tr>
                  ))}
                </tbody>
              </TableWrap>
            </div>
          </div>

          {/* Equal Angle ISA */}
          <SubTitle>Equal Angle – ISA (Wt. Kg/Mtr.)</SubTitle>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>Dim (MM)</th>
                {['2.5','3','3.6','4','5','6','8','10'].map(t=><th key={t} style={th}>{t} MM</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['20/22','0.8','0.9','','','','','',''],
                ['25','0.9','1.1','','1.4','1.8','','',''],
                ['30','','1.1','','','','','',''],
                ['32','','1.3','','','','','',''],
                ['35','','1.5','1.7','2.2','2.6','','',''],
                ['40','','1.7','','2.4','3','3.5','',''],
                ['50','','','','3','3.6','4.5','',''],
                ['65','','','','','5.4','5.8','7.7','9.4'],
                ['75','','','','','5.7','6.8','8.9','11'],
                ['90','','','','','','8.2','11','14.5'],
                ['100','','','','','','10','13.6','16.3'],
              ].map(([dim,...vals],i)=>(
                <tr key={dim} style={{background:i%2===0?'#fff':'#f8fafc'}}>
                  <td style={tdDim}>{dim}</td>
                  {vals.map((v,j)=><td key={j} style={td}>{v||'–'}</td>)}
                </tr>
              ))}
            </tbody>
          </TableWrap>

          {/* ── Flats & TMT Bar ── */}
          <SectionTitle>Flats &amp; TMT Bars</SectionTitle>

          <SubTitle>Flats (Wt. Kgs/Mtr.)</SubTitle>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>Dim (MM)</th>
                {['3','4','5','6','8','10','12','16','20','25'].map(t=><th key={t} style={th}>{t} MM</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['12','0.25','','0.4','','','','','','',''],
                ['18','','0.7','','','','','','','',''],
                ['20','0.45','','0.7','','','','','','',''],
                ['25','','','1','','','','','','',''],
                ['30','0.7','','1.2','','','','','','',''],
                ['32','0.8','','1.3','1.5','2.2','2.8','','','',''],
                ['40','1.1','','1.6','1.9','2.5','3.1','3.8','5','','7.9'],
                ['50','1.2','','2','2.4','3.1','3.9','4.7','6.3','6.3','9.8'],
                ['65','','','3','','4','4.9','5.9','8.7','8.7','12.4'],
                ['75','','','3.5','','4.7','5.9','7.1','10','10','13.0'],
                ['100','','','4.7','','6.3','7.8','9.4','12.6','12.6','21.8'],
                ['125','','','5.9','','7.9','9.8','11.8','14.6','14.6','24.6'],
                ['150','','','7.2','','9.4','11.8','14.1','20','20','29.5'],
              ].map(([dim,...vals],i)=>(
                <tr key={dim} style={{background:i%2===0?'#fff':'#f8fafc'}}>
                  <td style={tdDim}>{dim}</td>
                  {vals.map((v,j)=><td key={j} style={td}>{v||'–'}</td>)}
                </tr>
              ))}
            </tbody>
          </TableWrap>

          <SubTitle>TMT Bar – Weight per Meter (Kg/M)</SubTitle>
          <TableWrap>
            <thead>
              <tr>
                <th style={th}>Size (MM)</th>
                <th style={th}>Cross Sectional Area (MM²)</th>
                <th style={th}>I.S Lower Limit</th>
                <th style={th}>I.S. Standard Limit</th>
                <th style={th}>I.S. Upper Limit</th>
              </tr>
            </thead>
            <tbody>
              {[
                [8,50.3,0.367,0.395,0.423],
                [10,78.6,0.574,0.617,0.660],
                [12,113.1,0.844,0.888,0.932],
                [16,201.2,1.501,1.580,1.659],
                [20,314.3,2.396,2.470,2.544],
                [25,491.1,3.735,3.850,3.966],
                [28,616.0,4.685,4.850,4.975],
                [32,804.6,6.121,6.310,6.499],
              ].map(([s,a,l,st,u],i)=>(
                <tr key={s} style={{background:i%2===0?'#fff':'#f8fafc'}}>
                  <td style={tdDim}>{s}</td>
                  <td style={td}>{a}</td>
                  <td style={td}>{l}</td>
                  <td style={{...td,fontWeight:700,color:'#1a2a4a'}}>{st}</td>
                  <td style={td}>{u}</td>
                </tr>
              ))}
            </tbody>
          </TableWrap>

          {/* Disclaimer */}
          <div style={{ background: '#fef9f0', border: '1px solid #fde68a', borderRadius: 10, padding: '14px 18px', fontSize: 13, color: '#92400e', marginTop: 8 }}>
            * These are part of our regular offering. Size, dimension, thickness and material specification other than listed here can be supplied on an order basis which may be subject to a minimum order quantity. <strong>Above weights are indicative only — confirm before placing order.</strong>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
