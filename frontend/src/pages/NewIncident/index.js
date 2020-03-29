import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './style.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    const ongId = localStorage.getItem('ongId')

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()
        const data = {
            title,
            description,
            value,
        }
        try {
            await api.post(`incidents`,data,{
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar caso')
        }

    }

    return(
        <div className="newincident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrarum heroi para resolver isso.</p>
            
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input value={title} onChange={e=> setTitle(e.target.value)} placeholder="Titulo do caso" />
                <textarea value={description} onChange={e=> setDescription(e.target.value)} placeholder="Descricao"/>
                <input value={value} onChange={e=> setValue(e.target.value)} placeholder="Valor em reais"/>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}