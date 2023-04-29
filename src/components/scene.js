import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useThree } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/iphone_14_pro_max.glb')

  const camera = useThree((state) => state.camera)
  const scene = useThree((state) => state.scene)

  useLayoutEffect(() => {
    camera.position.set(0, 2, 6)
    materials.jFPFAvCbiqflbQV.color.set('#9bb5ce')
    materials.bmOZLlCkCKhIIVe.color.set('#9bb5ce')

    let fov = camera.fov
    fov = (1400 * 10) / window.innerWidth
    camera.fov = fov
    camera.updateProjectionMatrix()

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#phone-model',
        start: 'top+=200 top',
        endTrigger: '#battery',
        end: 'top top',
        scrub: true,
      },
    })

    //Mobile responsivity That I didnt set!
    /** 
    let mm = gsap.matchMedia();

mm.add("(min-width: 48em)", () => {

  // selector text scoped to myRefOrElement 
  gsap.to(".class", {...});

});

mm.add("(max-width: 799px)", () => {

  // selector text scoped to myOtherElement 
  gsap.to(".class", {...});

}, myOtherElement); // <- overrides default scope!!!

*/

    tl.fromTo(camera.position, { y: 2.3 }, { y: 0 })
      .to(scene.rotation, { y: 2 })
      .to(scene.rotation, { y: 3 })
      .to(scene.rotation, { z: 1.58 }, 'key1')
      .to(camera.position, { z: 4 }, 'key1')
      .to(scene.rotation, { y: 0, z: 0 }, 'key2')
      .to(camera.position, { z: 6, x: 0.7 }, 'key2')
      // .to(scene.rotation, { y: 6.3, z: 0 }, 'key3')
      .to(camera.position, { x: 0.5, y: 0 }, 'key3')
  }, [])
  return (
    <group {...props} dispose={null} position-y={-0.3}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lxsKwuOPNvmzBKg_0.geometry}
            material={materials.KhJiSWFcsscOusf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FjhETOCBEeiBmch.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.alSOKOYgFKIcUtR.geometry}
            material={materials.sWxYOtHGWTcXRMx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AbxQOpRbGREHXRG.geometry}
            material={materials.IDdMwJVCyuFpUnA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tWfjYtMZCfucxRt.geometry}
            material={materials.fdfRsQCrfvPBPfQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.XbtrdVaOWYmkEiU.geometry}
            material={materials.YiceMpFVTpnmoaq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rrqFqyfckTuyRuI.geometry}
            material={materials.CSNzlRnZuvCyxNL}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.YbXWdqEcjbfTKuN_0.geometry}
            material={materials.GFNYbWjyDVGUwJd}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.qjXEDwnnBYwWcJn.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FGDSbHbILfUmiaH.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BhvzCWikxrVeDTV.geometry}
            material={materials.LtesZnUOMbBEAoi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MMkajxMNWrwGQfi.geometry}
            material={materials.LtesZnUOMbBEAoi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.YnrVhXEUDbStWCs.geometry}
            material={materials.EJpkIDZfhPDUzel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ePYqawqlCJbCsNi.geometry}
            material={materials.CSNzlRnZuvCyxNL}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.knexoFNknstHgiO.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FaUtifOQSMTXiZM.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.jQXfQpudiYObSGp.geometry}
            material={materials.sWxYOtHGWTcXRMx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.KABLQLZRuEbcLWk.geometry}
            material={materials.fdfRsQCrfvPBPfQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.OMkeKbwVHRBkBwM.geometry}
            material={materials.IkWzRHNnDaKQXIi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DLfIUIalXuQjJsL.geometry}
            material={materials.pBMikDFQfUOsKkr}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RGbIswEcCTzqNsn_0.geometry}
            material={materials.FlDKBWPodPcEeGy}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.XeFHhVBtRZWPGxR.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nJYGEbPQybRBbiN.geometry}
            material={materials.tDZQoaroJfCIQtF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dNDonqESZOxUcei_0.geometry}
            material={materials.LUbRMhkIhuekQRK}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.IuMgFUHIyRWENxG_0.geometry}
            material={materials.LcWBQfBvCzxThpp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.oCklTGvTZoDWJrC_0.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nxFoHsySvfcSLvp.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JyAbjubWrOdfygC_0.geometry}
            material={materials.jFPFAvCbiqflbQV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vauUojKrKkLLDtY.geometry}
            material={materials.HvAGJeQTAiWbceX}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.yqmgDmvGsmuPwXx_0.geometry}
            material={materials.bmOZLlCkCKhIIVe}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.wjSYkRykuFHJNPw.geometry}
            material={materials.KxzouvBYEgdZhMo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rJeCWUNsVVXXAbI.geometry}
            material={materials.psePdsxZprlxGrw}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rqSonbcVVSPWFfa_0.geometry}
            material={materials.jFPFAvCbiqflbQV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JUTNJcWwqyxbGDZ_0.geometry}
            material={materials.LJBezuBxKRoHnAp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tWBbDznHihIxXam.geometry}
            material={materials.OStzgRHtVBLWwiD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PLFTnNQeqVAxicS.geometry}
            material={materials.BLpVAsLWNICZYGG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GWEiavWnRxbogtw_0.geometry}
            material={materials.FsunUcGyajFpQmW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RFqaqXLpuCDBIGV_0.geometry}
            material={materials.nJRBoEsOhzMSqCz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BDLCJBydsNjizog_0.geometry}
            material={materials.fGwijctGaiRaYJC}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.zPPSOvNamLQVyvv.geometry}
            material={materials.qEGySvwsouNnVcn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.YPGjoywokSeoQFr.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MoTJNOoMxqdxNvQ.geometry}
            material={materials.IBtgGxCVyZhjKZM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mZxrNiCtMrMjOMv.geometry}
            material={materials.WqbAhnIPgrrhfXS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tQCDizUpBYNcvFA.geometry}
            material={materials.LtesZnUOMbBEAoi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CAQeTxdpUcbxQyT.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.qsTxqfACkdoWeLQ.geometry}
            material={materials.IBtgGxCVyZhjKZM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aVmapfDgqkPkjUf.geometry}
            material={materials.WqbAhnIPgrrhfXS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lgnGJJmNebyRbHq_0.geometry}
            material={materials.rNCplyWedyfORFh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.QaGkMzxNzKPcqRy.geometry}
            material={materials.iEhZxWeNLTDdgxm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RUMRNTkptJGDMpy.geometry}
            material={materials.LJBezuBxKRoHnAp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BeQtuLXtpSTrzAH.geometry}
            material={materials.initialShadingGroup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.KUDomTaVduCyevu.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.QOfJIBEXOvXfSUh.geometry}
            material={materials.vsSJQngPxBJTVZb}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aYjPeBrpBRopJbp.geometry}
            material={materials.xHgtbqndQshkTKG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.UCttAeyROPsgmix.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/iphone_14_pro_max.glb')
