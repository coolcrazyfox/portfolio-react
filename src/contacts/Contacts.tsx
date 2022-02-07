import React from 'react';
import s from './Contacts.module.css';
import sCont from '../../src/common/styles/Container.module.css'



export function Contacts(props: any) {
    return(
    <div className={s.ContactsBlock}>
        <div className={`${s.contactsContainer} ${sCont.container} `}>
            <h2 className={s.title}>Contacts</h2>
            <form className={s.contactsForm}>
                <input type="text"/>
                <input type="text"/>
                <textarea />
                <button type={"submit"} className={s.submitBtn}>Send</button>

            </form>

        </div>

    </div>
    );
}